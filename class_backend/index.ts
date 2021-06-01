import { createConnection } from "typeorm";
import { ApolloError, ApolloServer, gql, IResolvers } from "apollo-server";
import Board from "./Board.postgres";

//Backend API 서버 셋팅
const typeDefs = gql`
  scalar Date

  type Query {
    fetchBoards: [BoardReturn!]
  }

  type BoardReturn {
    writer: String
    age: Int
  }

  type Return {
    message: String
  }

  type Mutation {
    createBoard(writer: String!, age: Int): Return
    deleteBoard(number: Int!): Return
  }
`;
const resolvers: IResolvers = {
  Query: {
    fetchBoards: async () => {
      try {
        return Board.find().then((res) =>
          res.filter((data: any) => data.deletedAt === null)
        );
        // const result = await Board.find();
        // return result.filter((data: any) => data.deletedAt === null);
      } catch (error) {
        throw new Error("데이터가 잘못 입력되었습니다.");
      }
    },
  },
  Mutation: {
    createBoard: async (_, args) => {
      try {
        await Board.insert({
          ...args,
        });
        return {
          message: "데이터가 정상적으로 들어왔습니다.",
        };
      } catch (error) {
        throw new Error("데이터가 잘못 입력되었습니다.");
      }
    },

    deleteBoard: (_, args) => {
      try {
        Board.update({ number: args.number }, { deletedAt: new Date() });
        return {
          message: "삭제완료",
        };
      } catch (error) {
        throw new ApolloError("게시물 삭제에 실패했습니다.");
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// 데이터베이스 연결 및 설정
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  port: 5003,
  host: "34.64.71.71",
  synchronize: true,
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
}).then(() => {
  console.log("접속완료!!");
  server.listen({ port: 4000 });
});
