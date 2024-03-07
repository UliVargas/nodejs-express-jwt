import { type Request, type Response } from 'express'
import { type Dependencies } from '../../infrastructure/config/dependencies'
import FindAllService from '../../application/use-cases/huellas/find-all.use-case'
import FindOneService from '../../application/use-cases/huellas/find-one.use-case'
import fs from 'node:fs'
import { Buffer } from 'node:buffer'
import jpeg from 'jpeg-js'

export default (dependencies: Dependencies): {
  findAll: (req: Request, res: Response) => Promise<void>
  findOne: (req: Request, res: Response) => Promise<void>
} => {
  const findAllService = FindAllService(dependencies)
  const findOneService = FindOneService(dependencies)

  const findAll = async (req: Request, res: Response): Promise<void> => {
    const huellas = await findAllService()
    res.status(200).json(huellas)
  }

  const findOne = async (req: Request, res: Response): Promise<void> => {
    const resp: any = await findOneService(req.params.id)

    if (resp === null) {
      res.status(404).json({ message: 'Huella not found' })
      return
    }

    console.log({
      width: resp.width,
      height: resp.height,
      size: resp.width * resp.height,
      length: resp.huella.length
    })

    const width = resp.width
    const height = resp.height

    // eslint-disable-next-line n/no-deprecated-api
    const frameData = Buffer.alloc(resp.huella.length * 4)

    let i = 0
    let j = 0
    while (i < frameData.length) {
      frameData[i++] = resp.huella[j] // red
      frameData[i++] = resp.huella[j] // green
      frameData[i++] = resp.huella[j] // blue
      frameData[i++] = resp.huella[j++] // alpha - ignored in JPEGs
    }

    const rawImageData = {
      data: Buffer.from(frameData),
      height,
      width
    }

    const jpegImageData = jpeg.encode(rawImageData, 200)
    console.log(jpegImageData)

    fs.writeFileSync('image.jpg', jpegImageData.data)

    res.setHeader('Content-Type', 'image/jpeg')
    res.end(jpegImageData.data)
  }

  return {
    findAll,
    findOne
  }
}
