import { 
    loadFilesSync, 
    mergeTypeDefs, 
    mergeResolvers
} from "graphql-tools"

// 파일 읽어오기
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`)

// 파일 공유
export const typeDefs = mergeTypeDefs(loadedTypes)
export const resolvers = mergeResolvers(loadedResolvers)