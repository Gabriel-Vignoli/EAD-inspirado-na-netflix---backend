import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis', 'courseId', 'order', 'uploadVideo', 'secondsLong'  ],
  filterProperties: ['name', 'synopsis', 'courseId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'courseId', 'order', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'courseId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}

export const episodeResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        //caminho absoluto dentro do sistema operacional, onde o adminJS vai salvar o arquivo
        bucket: path.join(__dirname, '..', '..', '..', 'uploads')
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'
    },
    //o caminho que vem depois da pasta uploads
    uploadPath: (record, filename) => `videos/course-${record.get('courseId')}/${filename}`
  })
]