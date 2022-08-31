<template>
    <footer class=" bg-white w-full max-w-[1520px] px-4 m-auto flex flex-col space-y-4 py-6 ">
        <div class=" w-full border-t border-[#414141] ">
        </div>
       <span class=" font-normal text-[#414141] text-xs lg:text-sm">©{{year}} Coloc Housing • VAT BE 0773.923.507 - IPI 512 838</span>

    </footer>
</template>


<script>
export default {
    data(){
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>