<template>
  <v-app>
    <v-app-bar app color="white" elevation="1">
      <v-toolbar-title class="text-h5 font-weight-bold orange--text">
        StudyFellow
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey darken-2">ホーム</v-btn>
      <v-btn text color="grey darken-2">特徴</v-btn>
      <v-btn text color="grey darken-2">使い方</v-btn>
      <v-btn color="orange" class="white--text">ダウンロード</v-btn>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container fluid class="pa-0">
        <!-- Hero Section -->
        <v-row no-gutters class="hero-section">
          <v-col cols="12" md="6" class="d-flex align-center justify-center pa-8">
            <div>
              <h1 class="text-h3 font-weight-bold mb-4">
                Z世代のためのAIを使った<br>勉強効率化ノートアプリ
              </h1>
              <p class="text-h5 mb-6">
                StudyFellowで、あなたの学習を次のレベルへ。
              </p>
              <v-btn x-large color="orange" class="white--text">
                今すぐダウンロード
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-img src="/sample1.jpg" max-width="500" contain></v-img>
          </v-col>
        </v-row>

        <!-- Features Section -->
        <v-row class="features-section pa-8">
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold">StudyFellowの特徴</h2>
          </v-col>
          <v-col cols="12" sm="6" md="4" v-for="(feature, index) in features" :key="index">
            <v-card class="mx-auto" max-width="400" height="100%">
              <v-img :src="feature.image" height="200px"></v-img>
              <v-card-title>{{ feature.title }}</v-card-title>
              <v-card-text>{{ feature.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- How to Use Section -->
        <v-row class="how-to-use-section pa-8 orange lighten-5">
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold">StudyFellowの使い方</h2>
          </v-col>
          <v-col cols="12" md="6" v-for="(step, index) in howToUse" :key="index" class="d-flex align-center">
            <v-card class="mx-auto" max-width="500">
              <v-card-title class="text-h5">STEP {{ index + 1 }}</v-card-title>
              <v-card-text class="text-body-1">{{ step }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- AI Features Section -->
        <v-row class="ai-features-section pa-8">
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold">AIで勉強を極限まで効率化</h2>
          </v-col>
          <v-col cols="12" md="6" v-for="(feature, index) in aiFeatures" :key="index">
            <v-card class="mx-auto" max-width="500">
              <v-card-title class="text-h5">{{ feature.subject }}</v-card-title>
              <v-card-text class="text-body-1">{{ feature.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- CTA Section -->
        <v-row class="cta-section pa-8 orange lighten-4">
          <v-col cols="12" class="text-center">
            <h2 class="text-h4 font-weight-bold mb-4">あなたの学習を革新しよう</h2>
            <p class="text-h6 mb-6">StudyFellowで、効率的で楽しい学習体験を始めましょう。</p>
            <v-btn x-large color="orange darken-2" class="white--text">
              無料でダウンロード
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer padless class="grey lighten-3">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="6" class="py-4">
            <span class="text-body-2">&copy; {{ new Date().getFullYear() }} StudyFellow. All rights reserved.</span>
          </v-col>
          <v-col cols="12" sm="6" class="py-4 text-sm-right">
            <v-btn text small class="mr-2" v-for="link in footerLinks" :key="link">
              {{ link }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
const features = [
  { title: 'ノート管理', description: '手書きノート、プリント、PDF、音声データを一元管理', image: '/sample2.jpg' },
  { title: 'AI質問', description: 'ノートのスクリーンショットから最新AIに無制限に質問', image: '/sample3.jpg' },
  { title: '効率化', description: 'ChatGPT, Geminiなど最新AIで勉強を極限まで効率化', image: '/sample4.jpg' },
  { title: 'ハッシュタグ', description: 'ハッシュタグスタンプで関連コンテンツをまとめて管理', image: '/sample5.jpg' },
  { title: 'AI チャット', description: '最新AIと無料・無制限でチャット', image: '/sample6.jpg' },
  { title: '復習リマインダー', description: 'エビングハウスの忘却曲線に基づいた復習リマインド', image: '/sample7.jpg' },
]

const howToUse = [
  '大量の手書きノートや日々の授業で配られるプリント、PDFデータ、音声データを用意します。',
  '忘れたり無くしたりする前にStudyFellowに取り込んでまとめましょう！',
]

const aiFeatures = [
  { subject: '英語・古文', description: '文章をスクリーンショットしてAIでテキスト化、翻訳、音声化。単語をタップして暗記カード作成。文法の質問もAIにできます。' },
  { subject: '数学・理科', description: 'わからない問題をスクリーンショットしてAIに質問。答えを暗記カードに登録して復習できます。' },
  { subject: '社会', description: '覚えたいところに暗記マーカーを引いて、いつでもどこでも復習可能。マルバツを登録して正答率も計算できます。' },
]

const footerLinks = ['プライバシーポリシー', '利用規約', 'お問い合わせ']
</script>

<style scoped>
.hero-section, .features-section, .how-to-use-section, .ai-features-section, .cta-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before, .features-section::before, .how-to-use-section::before, .ai-features-section::before, .cta-section::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,167,38,0.2) 0%, rgba(255,238,88,0.1) 70%, rgba(255,238,88,0) 100%);
  border-radius: 50%;
}

.hero-section::before {
  top: -150px;
  left: -150px;
}

.features-section::before {
  bottom: -150px;
  right: -150px;
}

.how-to-use-section::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ai-features-section::before {
  top: -150px;
  right: -150px;
}

.cta-section::before {
  bottom: -150px;
  left: -150px;
}

@media (max-width: 960px) {
  .hero-section, .features-section, .how-to-use-section, .ai-features-section, .cta-section {
    padding: 2rem !important;
  }
}
</style>