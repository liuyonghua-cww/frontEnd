<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "@/static/font/iconfont.css";
@import "uview-ui/index.scss";
page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>
