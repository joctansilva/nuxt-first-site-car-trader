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
    <!-- CARS PAGE -->
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <!-- CAR SIDE BAR -->
        <div class="shadow border w-64 mr-10 z-30 h-[190px]">
          <div
            class="p-5 flex justify-between relative cursor-pointer border-b"
          >
            <h3>Location</h3>
            <h3 class="text-blue-400 capitalize">Toronto</h3>
            <!-- <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
              <input type="text" class="border p-1 rounded" />
              <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                Aplicar
              </button>
            </div> -->
          </div>
          <div
            class="p-5 flex justify-between relative cursor-pointer border-b"
          >
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize">Toyota</h3>
          </div>
          <div
            class="p-5 flex justify-between relative cursor-pointer border-b"
          >
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize"></h3>
          </div>
        </div>
        <!-- CAR SIDE BAR -->

        <!-- CAR SIDE CARDS -->
        <!-- CAR SIDE CARDS -->
      </div>
    </div>
    <!-- CARS PAGE -->
  </div>
</template>
