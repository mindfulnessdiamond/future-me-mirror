export type ResultType =
  | "VISIONARY"
  | "MUSE"
  | "QUEEN"
  | "EXPLORER"
  | "CREATOR"
  | "GARDEN"
  | "LIGHT"
  | "POET"
  | "CURATOR"
  | "BLOOM"
  | "DREAMER"
  | "FREE_SPIRIT";

export interface DiagnosisState {
  userName: string;
  answers: string[];
  resultType: ResultType | null;
}

export interface ResultContent {
  label: string;
  tagline: string;
  shortDescription: string;
  description: string;
  promise: string;
  promiseJa: string;
  action: string;
}

export const RESULT_CONTENT: Record<ResultType, ResultContent> = {
  VISIONARY: {
    label: "THE VISIONARY",
    tagline: "未来を先に見る人",
    shortDescription: "まだ誰も見えていない景色を、\nあなたは少し先に感じ取る人。",
    description:
      "あなたの中に眠る未来の姿は、まだ誰も見えていないものを先に感じている人かもしれません。\nその「なんとなく」は、あなたにしかない才能です。",
    promise: "I see what others cannot yet.",
    promiseJa: "私には、まだ見えていない未来が見える。",
    action: "今日、頭の中の「いつかやりたいこと」をひとつだけ書き出してみてください。",
  },
  MUSE: {
    label: "THE MUSE",
    tagline: "美を感じ、形にする人",
    shortDescription: "あなたの感性は、\n誰かの心を静かに動かす。",
    description:
      "あなたの中に眠る未来の姿は、感性で世界を感じ、それを形にしていく人かもしれません。\nあなたの存在そのものが、誰かにとってのインスピレーションです。",
    promise: "Beauty flows through me.",
    promiseJa: "美しさが、私を通して流れる。",
    action: "今日、心が動いた瞬間を、言葉でも写真でもいいのでひとつ残してみてください。",
  },
  QUEEN: {
    label: "THE QUEEN",
    tagline: "自分の価値を知り、輝く人",
    shortDescription: "あなたは、あなた自身の人生の\n主役であることを知っている。",
    description:
      "あなたの中に眠る未来の姿は、自分の価値を静かに、でも確かに受け取っていく人かもしれません。\n自分を選ぶことが、あなたの王国をつくります。",
    promise: "I honor my worth.",
    promiseJa: "私は、私の価値を受け取る。",
    action: "今日、「自分がしたいから」だけを理由に、何かひとつ選んでみてください。",
  },
  EXPLORER: {
    label: "THE EXPLORER",
    tagline: "まだ見ぬ世界へ踏み込む人",
    shortDescription: "地図のない道が、あなたの居場所。",
    description:
      "あなたの中に眠る未来の姿は、地図のない道を楽しんでいく人かもしれません。\n「まだ知らない」が、あなたにとっての入口です。",
    promise: "The unknown is my home.",
    promiseJa: "まだ見ぬ場所が、私の居場所。",
    action: "今日、いつもと違う何かをひとつ試してみてください。",
  },
  CREATOR: {
    label: "THE CREATOR",
    tagline: "生み出すことで世界を彩る人",
    shortDescription: "あなたの手から生まれるものは、\n世界に新しい色を灯す。",
    description:
      "あなたの中に眠る未来の姿は、自分の感性で世界を少しずつ豊かにしていく人かもしれません。\n「これが好き」という直感が、あなただけの地図になります。",
    promise: "I create my world.",
    promiseJa: "私は、私の世界をつくる。",
    action: "今日、「好きだな」と思うものをひとつ写真に撮ってみてください。",
  },
  GARDEN: {
    label: "THE GARDENER",
    tagline: "大切なものを育てる人",
    shortDescription: "あなたの優しさは、\n未来を育てる才能。",
    description:
      "あなたの中に眠る未来の姿は、日常を丁寧に、美しく整えていく人かもしれません。\nあなたがいる場所に、いつの間にか花が咲いています。",
    promise: "I nurture what I love.",
    promiseJa: "私は、大切なものを育てる。",
    action: "今日、身の回りのひとつを少しだけ丁寧に扱ってみてください。",
  },
  LIGHT: {
    label: "THE LIGHT",
    tagline: "場を明るくする人",
    shortDescription: "あなたの笑顔と存在が、\n周りの人を照らしている。",
    description:
      "あなたの中に眠る未来の姿は、その場にいるだけで誰かを笑顔にしていく人かもしれません。\nあなたの温もりは、気づかないうちに遠くまで届いています。",
    promise: "I light up the room.",
    promiseJa: "私は、場を照らす。",
    action: "今日、誰かにひとこと、温かい言葉をかけてみてください。",
  },
  POET: {
    label: "THE POET",
    tagline: "言葉と感性で世界を描く人",
    shortDescription: "あなたの言葉は、\n誰かの心にそっと残る。",
    description:
      "あなたの中に眠る未来の姿は、経験を言葉にして誰かの心に届けていく人かもしれません。\nあなたの「あのとき」が、誰かの「そうそう」になります。",
    promise: "I speak what others feel.",
    promiseJa: "私の言葉が、誰かの気持ちを代わりに語る。",
    action: "今日、感じたことをひとことだけ書き留めてみてください。",
  },
  CURATOR: {
    label: "THE CURATOR",
    tagline: "美しいものを見極める人",
    shortDescription: "あなたのセンスは、\n人生を豊かに整える。",
    description:
      "あなたの中に眠る未来の姿は、自分だけの「美しい」を持って生きていく人かもしれません。\nあなたの選ぶ色、形、言葉——それが、あなたの作品です。",
    promise: "I choose what truly matters.",
    promiseJa: "私は、本当に大切なものを選びとる。",
    action: "今日、自分が「美しい」と感じるものをひとつだけ意識してみてください。",
  },
  BLOOM: {
    label: "THE BLOOM",
    tagline: "これから咲いていく人",
    shortDescription: "焦らなくていい。\nあなたのペースで花は開く。",
    description:
      "あなたの中に眠る未来の姿は、まだ知らない自分の可能性へ向かって咲いていく人かもしれません。\n「まだ途中」が、あなたの最大の強みです。",
    promise: "I bloom in my own time.",
    promiseJa: "私は、私のペースで咲く。",
    action: "今日、「いつかやりたい」をひとつ声に出してみてください。",
  },
  DREAMER: {
    label: "THE DREAMER",
    tagline: "夢を信じ、未来を描く人",
    shortDescription: "あなたの夢は、\n未来をつくる設計図。",
    description:
      "あなたの中に眠る未来の姿は、夢を信じてそれを形にしていく人かもしれません。\nあなたが描く未来は、まだ見ぬ世界への地図です。",
    promise: "I dream, therefore I become.",
    promiseJa: "夢見るから、私はなる。",
    action: "今日、「いつか実現したいこと」をひとつ紙に書いてみてください。",
  },
  FREE_SPIRIT: {
    label: "THE FREE SPIRIT",
    tagline: "自由に、しなやかに生きる人",
    shortDescription: "型にはまらない生き方が、\nあなただけの魅力。",
    description:
      "あなたの中に眠る未来の姿は、自分のリズムで自由にしなやかに生きていく人かもしれません。\n枠を越えるたびに、あなたらしさが輝きます。",
    promise: "I flow with my own rhythm.",
    promiseJa: "私は、私のリズムで流れる。",
    action: "今日、「なんとなくしてきたこと」をひとつ、本当にしたいことに置き換えてみてください。",
  },
};
