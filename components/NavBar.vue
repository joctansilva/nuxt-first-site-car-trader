<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white py-5 px-64 shadow-md"
  >
    <div
      class="flex mx-auto mt-4 max-w-7xl justify-between space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 w-3/5"
    >
      <div class=" bg-black align-middle rounded-full p-4">
        <NuxtLink to="/"
          ><a class="text-3xl font-mono text-white font-bold"
            >CarTrader</a
          ></NuxtLink
        >
      </div>
      <div class="flex justify-between space-x-10">
        <ul class="flex justify-between items-center space-x-10 flex-row">
          <li class="font-normal hover:underline">HOME</li>
          <li class="font-normal hover:underline">CARROS</li>
          <li class="font-normal hover:underline">RESERVAR</li>
        </ul>
        <div class="bg-black rounded-full py-3 px-8 hover:bg-zinc-900">
          <button class="text-white font-normal ">
            CONTATO
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
