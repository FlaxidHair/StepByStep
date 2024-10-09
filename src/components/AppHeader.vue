<template>
    <header>
        <div>
            <img src="" alt="Logo">
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      info: '1231232'
    }
  },
  methods: {
    async showInfo () {
      const snap = await fetch('https://6a334d4f8b40d716.mokky.dev/stepbystep')
      const data = await snap.json()
      console.log(data)
    }
  }
}
</script>
