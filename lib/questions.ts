export interface Question {
  id: number;
  text: string;
  options: { key: string; label: string }[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "朝起きて、今日は最高の日にしたい。まず何をする？",
    options: [
      { key: "A", label: "部屋を整えて好きな香りをつける" },
      { key: "B", label: "好きな服やジュエリーを選ぶ" },
      { key: "C", label: "大切な人に連絡する" },
      { key: "D", label: "行ったことない場所へ出かける" },
      { key: "E", label: "アイデアをノートに書く" },
    ],
  },
  {
    id: 2,
    text: "友達からよく言われる言葉は？",
    options: [
      { key: "A", label: "センスいいよね" },
      { key: "B", label: "行動力あるよね" },
      { key: "C", label: "一緒にいると安心する" },
      { key: "D", label: "いつも楽しそう" },
      { key: "E", label: "視点がおもしろいね" },
    ],
  },
  {
    id: 3,
    text: "旅行先で一番心が動く瞬間は？",
    options: [
      { key: "A", label: "素敵な空間に入った瞬間" },
      { key: "B", label: "知らない街を歩く瞬間" },
      { key: "C", label: "大切な人と美味しいものを食べる時間" },
      { key: "D", label: "写真に残したい景色に出会った時" },
      { key: "E", label: "文化や物語を知った時" },
    ],
  },
  {
    id: 4,
    text: "今日の自分を少し特別にするなら？",
    options: [
      { key: "A", label: "お気に入りのジュエリーをつける" },
      { key: "B", label: "誰かに感謝を伝える、または会いに行く" },
      { key: "C", label: "いつもしないことをひとつやってみる" },
      { key: "D", label: "鏡の前で少し長く自分を見る" },
      { key: "E", label: "「やってみたかったこと」を今日始める" },
    ],
  },
  {
    id: 5,
    text: "夜、一日を振り返って残るのは？",
    options: [
      { key: "A", label: "明日のことを考えるとワクワクする" },
      { key: "B", label: "何かを作ったり考えたりした時間" },
      { key: "C", label: "誰かと交わした言葉" },
      { key: "D", label: "新しく知ったこと、気づいたこと" },
      { key: "E", label: "誰かの笑顔" },
    ],
  },
];
