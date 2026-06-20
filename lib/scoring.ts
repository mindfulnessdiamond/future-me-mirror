import { ResultType } from "./types";

// Primary type +3 pts, secondary type +1 pt.
// All 12 types have exactly 2 primary appearances across 5 questions.
const SCORING_MAP: [ResultType, ResultType][][] = [
  // Q1: 朝起きて、今日は最高の日にしたい。まず何をする？
  [
    ["GARDEN", "CURATOR"],       // A: 部屋を整えて好きな香りをつける
    ["QUEEN", "MUSE"],           // B: 好きな服やジュエリーを選ぶ
    ["LIGHT", "GARDEN"],         // C: 大切な人に連絡する
    ["EXPLORER", "FREE_SPIRIT"], // D: 行ったことない場所へ出かける
    ["CREATOR", "POET"],         // E: アイデアをノートに書く
  ],
  // Q2: 友達からよく言われる言葉は？
  [
    ["CURATOR", "QUEEN"],        // A: センスいいよね
    ["FREE_SPIRIT", "EXPLORER"], // B: 行動力あるよね
    ["MUSE", "LIGHT"],           // C: 一緒にいると安心する
    ["BLOOM", "MUSE"],           // D: いつも楽しそう
    ["VISIONARY", "DREAMER"],    // E: 視点がおもしろいね
  ],
  // Q3: 旅行先で一番心が動く瞬間は？
  [
    ["CURATOR", "GARDEN"],       // A: 素敵な空間に入った瞬間
    ["EXPLORER", "FREE_SPIRIT"], // B: 知らない街を歩く瞬間
    ["GARDEN", "LIGHT"],         // C: 大切な人と美味しいものを食べる時間
    ["POET", "CREATOR"],         // D: 写真に残したい景色に出会った時
    ["DREAMER", "VISIONARY"],    // E: 文化や物語を知った時
  ],
  // Q4: 今日の自分を少し特別にするなら？
  [
    ["QUEEN", "CURATOR"],        // A: お気に入りのジュエリーをつける
    ["LIGHT", "MUSE"],           // B: 誰かに感謝を伝える、または会いに行く
    ["FREE_SPIRIT", "EXPLORER"], // C: いつもしないことをひとつやってみる
    ["MUSE", "BLOOM"],           // D: 鏡の前で少し長く自分を見る
    ["BLOOM", "CREATOR"],        // E: 「やってみたかったこと」を今日始める
  ],
  // Q5: 夜、一日を振り返って残るのは？
  [
    ["VISIONARY", "DREAMER"],    // A: 明日のことを考えるとワクワクする
    ["CREATOR", "POET"],         // B: 何かを作ったり考えたりした時間
    ["POET", "MUSE"],            // C: 誰かと交わした言葉
    ["DREAMER", "VISIONARY"],    // D: 新しく知ったこと、気づいたこと
    ["LIGHT", "GARDEN"],         // E: 誰かの笑顔
  ],
];

export function calculateResult(answers: string[]): ResultType {
  const scores: Record<ResultType, number> = {
    VISIONARY: 0, MUSE: 0, QUEEN: 0, EXPLORER: 0, CREATOR: 0,
    GARDEN: 0, LIGHT: 0, POET: 0, CURATOR: 0, BLOOM: 0,
    DREAMER: 0, FREE_SPIRIT: 0,
  };

  answers.forEach((answer, qIndex) => {
    const optionIndex = ["A", "B", "C", "D", "E"].indexOf(answer);
    if (optionIndex === -1 || qIndex >= SCORING_MAP.length) return;
    const [primary, secondary] = SCORING_MAP[qIndex][optionIndex];
    scores[primary] += 3;
    scores[secondary] += 1;
  });

  return (Object.keys(scores) as ResultType[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );
}
