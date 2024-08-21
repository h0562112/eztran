export default function() {

    const com_var1 = ref(0)


    return {
        getTest() {
            return $fetch('http://192.168.2.71:3030/api/template/test', {})
        },

        add_var() {
            com_var1.value++
        },
        print_var() {
            console.log(com_var1.value)
        },

        createGame() {

        },
        deleteGame() {
        }
    }
}