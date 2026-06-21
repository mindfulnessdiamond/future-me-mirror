import { ResultType } from "./types";

// 12タイプ → 6グループ（無料リリースv1）。
// 各グループは「代表タイプ」のカードで配信する。
// アップグレード時にグループを解体して12タイプ個別に戻せる。
//
// ① 未来を描く     : VISIONARY ＋ DREAMER      → 代表 VISIONARY
// ② 感性で形にする : MUSE ＋ POET              → 代表 MUSE
// ③ 自分の価値で輝く: QUEEN ＋ CURATOR          → 代表 QUEEN
// ④ 自由に旅する   : EXPLORER ＋ FREE_SPIRIT   → 代表 EXPLORER
// ⑤ 創り、育てる   : CREATOR ＋ BLOOM          → 代表 CREATOR
// ⑥ 人を照らす     : GARDEN ＋ LIGHT           → 代表 GARDEN

export const GROUP_REP: Record<ResultType, ResultType> = {
  VISIONARY: "VISIONARY",
  DREAMER: "VISIONARY",
  MUSE: "MUSE",
  POET: "MUSE",
  QUEEN: "QUEEN",
  CURATOR: "QUEEN",
  EXPLORER: "EXPLORER",
  FREE_SPIRIT: "EXPLORER",
  CREATOR: "CREATOR",
  BLOOM: "CREATOR",
  GARDEN: "GARDEN",
  LIGHT: "GARDEN",
};

// 6グループ（代表タイプ）→ ProLineの友だち追加シナリオURL。
// ふみさんが各グループのシナリオを作ったら、ここに6本貼ってください。
// 未設定のグループは DEFAULT_ADDFRIEND（初期登録シナリオ）に流れます。
export const DEFAULT_ADDFRIEND = "https://b94jxiy5.autosns.app/line";

export const GROUP_URL: Record<ResultType, string> = {
  VISIONARY: "https://b94jxiy5.autosns.app/addfriend/s/ZG9KqChE87/@391knuuu", // ① 未来を描く
  MUSE: "https://b94jxiy5.autosns.app/addfriend/s/cYRhqQSTL2/@391knuuu", // ② 感性で形にする
  QUEEN: "https://b94jxiy5.autosns.app/addfriend/s/cbePyHgnZo/@391knuuu", // ③ 自分の価値で輝く
  EXPLORER: "https://b94jxiy5.autosns.app/addfriend/s/hQ3EjXocCz/@391knuuu", // ④ 自由に旅する
  CREATOR: "https://b94jxiy5.autosns.app/addfriend/s/czyVWAbvpd/@391knuuu", // ⑤ 創り、育てる
  GARDEN: "https://b94jxiy5.autosns.app/addfriend/s/tKzb1Tkyhm/@391knuuu", // ⑥ 人を照らす
  // 以下は代表ではないので未使用
  DREAMER: "",
  POET: "",
  CURATOR: "",
  FREE_SPIRIT: "",
  BLOOM: "",
  LIGHT: "",
};

// タイプ → 配信に使う友だち追加URL
export function getAddFriendUrl(type: ResultType): string {
  const rep = GROUP_REP[type] ?? type;
  return GROUP_URL[rep] || DEFAULT_ADDFRIEND;
}
