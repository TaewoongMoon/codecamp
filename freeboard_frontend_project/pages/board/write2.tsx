import {useState} from "react";
import {useMutation, gql} from '@apollo/client';
import {useRouter} from "next/router";
import WriteContainer from "../../src/components/freewrite/write/Write.container";

export default function BoardWritePage() {
  return<WriteContainer />
}
