<template>
  <div class="min-h-screen bg-[#FFF9F2] font-pretendard flex justify-center">
    <div
      class="w-[395px] min-w-[340px] bg-[#FAE8DA] min-h-screen relative overflow-y-auto"
    >
      <MainHeader />
      <!-- 본문 내용 -->
      <main class="flex flex-col px-6 pt-20 pb-24">
        <!-- 제목 -->
        <h1
          class="mb-6 text-xl font-medium text-center text-gray-800 font-uhbeesehyun"
        >
          오늘도 우리 아코는 한 걸음씩!
        </h1>

        <!-- 스탬프 영역 -->
        <div class="relative w-[300px] h-[400px] mx-auto mb-6">
          <svg
            class="absolute top-0 left-0 z-0 w-full h-full"
            viewBox="0 0 300 400"
          >
            <path
              d="M 50 50 L 150 50 Q 250 50, 250 125 Q 250 200, 150 200 L 50 200 A 75 75 0 0 0 50 350 L 150 350"
              stroke="#ccc"
              stroke-width="4"
              fill="transparent"
            />
          </svg>
          <div
            v-for="(stamp, index) in stamps"
            :key="index"
            :style="stamp.position"
            class="absolute w-[50px] h-[50px] flex justify-center items-center"
          >
            <img
              :src="
                stamp.completed
                  ? getCompletedStampIcon(stamp.label)
                  : getGrayStampIcon(stamp.label)
              "
              alt="stamp"
              class="w-full h-full"
            />
          </div>
        </div>

        <!-- 할 일 표시 -->
        <div class="mb-6 space-y-4">
          <div class="flex space-x-4">
            <div
              v-for="(task, index) in tasks.slice(0, 2)"
              :key="index"
              class="flex items-center justify-between flex-1 p-3 bg-white rounded-lg shadow-sm"
            >
              <span class="text-sm">{{ task.name }}</span>
              <span v-if="task.completed" class="text-[#F6B87A]">✔</span>
            </div>
          </div>
          <div class="flex space-x-4">
            <div
              v-for="(task, index) in tasks.slice(2)"
              :key="index"
              class="flex items-center justify-between flex-1 p-3 bg-white rounded-lg shadow-sm"
            >
              <span class="text-sm">{{ task.name }}</span>
              <span v-if="task.completed" class="text-[#F6B87A]">✔</span>
            </div>
          </div>
        </div>

        <!-- 아코 이미지 -->
        <div class="text-center">
          <img
            src="@/assets/Icons/akoming/mainpage/minielephanticon.svg"
            alt="아코 이미지"
            class="w-32 h-32 mx-auto mb-2"
          />
          <!-- <svg
            class="w-32 h-32 mx-auto mb-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            />
            <path d="M14 9l-5 5-2-2" />
          </svg> -->
          <p class="text-sm text-gray-600">토실토실 아코가 자라는 중</p>
          <img
            src="@/assets/Icons/akoming/mainpage/ako-01.svg"
            alt="아코 이미지"
            class="w-32 h-32 mx-auto mb-2"
          />
        </div>
      </main>
      <MainFooter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainHeader from '@/components/layout/Header.vue'
import MainFooter from '@/components/layout/Footer.vue'
import minielephanticon from '@/assets/Icons/akoming/mainpage/minielephanticon.svg'

const stamps = ref([
  { label: 'A', completed: true, position: { top: '25px', left: '25px' } },
  { label: 'K', completed: true, position: { top: '25px', left: '125px' } },
  { label: 'O', completed: true, position: { top: '100px', left: '225px' } },
  { label: 'M', completed: false, position: { top: '175px', left: '125px' } },
  { label: 'I', completed: false, position: { top: '175px', left: '25px' } },
  { label: 'N', completed: false, position: { top: '325px', left: '25px' } },
  { label: 'G', completed: false, position: { top: '325px', left: '125px' } }
])

// 함수: completed가 true일 때 색상이 있는 아이콘을 가져옵니다.
const getCompletedStampIcon = (label) => {
  return require(`@/assets/Icons/akoming/stamp/color/color${label.toLowerCase()}.svg`)
}

// 함수: completed가 false일 때 회색 아이콘을 가져옵니다.
const getGrayStampIcon = (label) => {
  return require(`@/assets/Icons/akoming/stamp/gray/gray${label.toLowerCase()}.svg`)
}

const tasks = ref([
  { name: '아코밍 출석', completed: true },
  { name: '아코자국', completed: true },
  { name: '댓글 남기기', completed: false },
  { name: '아코폴리오', completed: false }
])
</script>

<style scoped>
@font-face {
  font-family: 'UhBeeSe_hyun';
  src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
