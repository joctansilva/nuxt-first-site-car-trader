<template>
    <div class="mt-10" className="contact">
        <div class="flex w-[600px] justify-between">
          <input
            type="text"
            name="name"
            id="name"
            class="border p-1"
            placeholder="Nome"
          />
          <input
            type="text"
            name="e-mail"
            id="eMail"
            class="border p-1"
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            class="border p-1"
            placeholder="Telefone"
          />
        </div>
        <div class="flex mt-4 w-[600px]">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="border p-1 w-full"
            placeholder="Mensagem"
          ></textarea>
        </div>
        <button
          class="bg-black text-white rounded-full py-2 px-20 hover:bg-zinc-900 mt-4"
        >
          Enviar
        </button>
      </div>
</template>