<template>
  <div>
    <!-- NAVBAR -->
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white py-5 px-64 shadow-md"
    >
      <div class="flex bg-black rounded-full p-4">
        <a class="text-3xl font-mono text-white font-bold" href="">CarTrader</a>
      </div>
      <div class="flex justify-between space-x-10">
        <ul class="flex justify-between items-center space-x-10 flex-row">
          <li class="font-normal hover:font-bold">HOME</li>
          <li class="font-normal hover:font-bold">CARROS</li>
          <li class="font-normal hover:font-bold">RESERVAR</li>
        </ul>
        <div class="bg-black rounded-full py-2 px-8 hover:bg-zinc-900">
          <button class="text-white font-normal hover:font-bold">
            CONTATO
          </button>
        </div>
      </div>
    </header>
    <!-- NAVBAR -->

    <!-- HOME HERO-->
    <div
      class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('public/images/bg-image.jpg')]"
    >
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl font-serif mb-10 text-white">Find Your Drive</h1>
        </div>
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
    <!-- HOME HERO-->
  </div>
</template>
