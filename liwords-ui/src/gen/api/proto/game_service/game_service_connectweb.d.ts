// @generated by protoc-gen-connect-web v0.11.0
// @generated from file game_service/game_service.proto (package game_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GameDocumentRequest, GameDocumentResponse, GameHistoryRequest, GameHistoryResponse, GameInfoRequest, GCGRequest, GCGResponse, RecentGamesRequest, RematchStreakRequest, StreakInfoResponse } from "./game_service_pb.js";
import { GameInfoResponse, GameInfoResponses } from "../ipc/omgwords_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service game_service.GameMetadataService
 */
export declare const GameMetadataService: {
  readonly typeName: "game_service.GameMetadataService",
  readonly methods: {
    /**
     * @generated from rpc game_service.GameMetadataService.GetMetadata
     */
    readonly getMetadata: {
      readonly name: "GetMetadata",
      readonly I: typeof GameInfoRequest,
      readonly O: typeof GameInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGCG gets a GCG string for the given game ID.
     *
     * @generated from rpc game_service.GameMetadataService.GetGCG
     */
    readonly getGCG: {
      readonly name: "GetGCG",
      readonly I: typeof GCGRequest,
      readonly O: typeof GCGResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGameHistory gets a GameHistory for the given game ID. GameHistory
     * is our internal representation of a game's state.
     *
     * @generated from rpc game_service.GameMetadataService.GetGameHistory
     */
    readonly getGameHistory: {
      readonly name: "GetGameHistory",
      readonly I: typeof GameHistoryRequest,
      readonly O: typeof GameHistoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetRecentGames gets recent games for a user.
     *
     * @generated from rpc game_service.GameMetadataService.GetRecentGames
     */
    readonly getRecentGames: {
      readonly name: "GetRecentGames",
      readonly I: typeof RecentGamesRequest,
      readonly O: typeof GameInfoResponses,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameMetadataService.GetRematchStreak
     */
    readonly getRematchStreak: {
      readonly name: "GetRematchStreak",
      readonly I: typeof RematchStreakRequest,
      readonly O: typeof StreakInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGameDocument gets a Game Document. This will eventually obsolete
     * GetGameHistory. Does not work with annotated games for now.
     *
     * @generated from rpc game_service.GameMetadataService.GetGameDocument
     */
    readonly getGameDocument: {
      readonly name: "GetGameDocument",
      readonly I: typeof GameDocumentRequest,
      readonly O: typeof GameDocumentResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

