<template>
    <div v-title data-title="更多" id="app" style="overflow: hidden;">
        <div>
            <div style="display: inline-block">
                <div class="circleCateList" v-for="item in dataList" :key="item.id">
                    <my-child :item="item"></my-child>
                </div>
            </div>
        </div>
        <my-toast :show="isAlert" :content="alertTitle"></my-toast>
        <my-loading :show="isLoading" ref="loading"></my-loading>
    </div>
</template>
<script>
    import child_circle from 'common/vue/circle/child_circle.vue'

    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
            }
        },
        components: {
            'my-child': child_circle
        },
        created () {
            this.getMoreCommunity()
        },
        computed: {
            ...mapGetters({
                isLoading: 'community_loading',
                isAlert: 'community_isAlert', //弹窗
                alertTitle: 'community_alertTitle',//弹窗提示

                dataList: 'community_more_dataList',
                pageNow: 'community_more_page',

                baseImgUrl: 'baseImg',
                contentHeight: 'contentHeight',
                baseRem: 'baseRem',
                netWork: 'netWork'
            })
        },
        methods: {
            goPerCommunity(circleId) {
                this.$router.push('/community/perCommunity/' + circleId)
            },
            getMoreCommunity() {
                let that = this
                this.$store.dispatch('community_more_getMoreCommunity').then(function (res) {
                })
            },
            refresh() {
                var that = this
                this.getMoreCommunity()
            }
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    @import '../../common/css/common.less';
</style>
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../css/community/moreCommunity.less';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
