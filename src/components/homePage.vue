<template>
	<div class="wrap">
		<selectCity class="select-city" v-model="citySelect"></selectCity>
		<el-input
		  placeholder="请输入地点"
		  icon="search" 
		  v-model="input"
		  class="query-ipt select-city"
		  :on-icon-click="handleIconClick">
		</el-input>
		<div class="amap-wrapper">
      <el-amap :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
	import selectCity from './selectCity'
	export default {
		data(){
			return {
				input: '',
				citySelect: ['北京','北京市','东城区']
			}
		},
		components: {
			selectCity
		},
		methods: {
			handleIconClick(ev) {
	      console.log(ev);
	    }
		}
	}
</script>

<style scoped>
.amap-wrapper{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -99;
}
.select-city{
	margin-top: 20px;
}
.query-ipt{
	width:8rem;
	margin-top:.4rem;
}
</style>