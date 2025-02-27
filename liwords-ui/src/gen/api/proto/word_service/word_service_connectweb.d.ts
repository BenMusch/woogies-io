// @generated by protoc-gen-connect-web v0.11.0
// @generated from file word_service/word_service.proto (package word_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DefineWordsRequest, DefineWordsResponse } from "./word_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service word_service.WordService
 */
export declare const WordService: {
  readonly typeName: "word_service.WordService",
  readonly methods: {
    /**
     * @generated from rpc word_service.WordService.DefineWords
     */
    readonly defineWords: {
      readonly name: "DefineWords",
      readonly I: typeof DefineWordsRequest,
      readonly O: typeof DefineWordsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

