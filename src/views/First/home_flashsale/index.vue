<template>
    <div class="home_flashsale">
        <div class="home_flashsale_box">
            <div class="flashsale_top">
                <p class="flashsale_text">限时抢购</p>
                <div class="flashsale_timer">
                    <p class="flashsale_timer_text">
                        <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAABGdBTUEAALGPC/xhBQAAA0pJREFUSA2tVM9rU0EQznt5MfFke1Bsoa30P6iiKBgh9CBU/HHx4EEhav0BUntLS2JCk5bSgqBFsGiPonizIt5iDilYClbBmwelBVushxZPsUmTft8289i3TUIsLrw3u998MzuzM7s+H0Ymk+kbGRk5x7nPnVTnNkYF4FellZ/HhCAYfylt/jD27QjzLzSFY1HRCe5aZ7kgmC6ug/Rgrgl8SqfTi+LeGR0d7SiXy0eSyeQxglifhljygbUpLJHEbMuy+gQQScyuVCrvCWCPj6IgZml75Klw9xCWGZUlClpubW0tw38RWAJyES6P0glkIBgMdg0NDS0LXyWMKMMugIl5CNQLZmOxCK8x5K9i0w31OfXkkS+11PU8rxKAeQ9oLrgtiJ7wTA71Et6eDsI1ouepqang+vr6Y8R+gWuc2tvOzs7BaDRa4JrDNWByIPSA/AHt/YxKNEc/sF5Mv6RSqR5iaiDGXzBYk7UpqSOHuIV7cRuensBDQIjAHsBzCEcbFwwGRex8zwF52nGcdlFQAutAaPt1LBQKdRUKhZ+qJvF4fFVXguzmJngsFlvhvGYRgde5oD6fIx5EojmvoDmvtba2HhBMl2qHsbGxNgFBfknywMDAH8EoJyYmVJ4OMr9TKpWWgalTwmntip8GSHiJXM7Z3s3XQVngp1U6C0/PideqtGd76SVwL9IAY7ZuL+3od/65XM6Zm5u7gWqn8LkHonP0OcrGOqbD4fBMJBLhvfIMT1RI5TicvgPjEL4SjGf8fn/abAbdA6uCaiRhdxM4S7sGm/OJRGJBeGoTRp7P5xdA5K34HQgETg4PD38Xksjq0ZzBceT1qyX68fHx7mKxOA8/B+HnMzI7wcwsGm5sbPyAog2KaVyGu2JkSlSaV7IfvBfgXTX1ssaJPIU/tscK+q3b5gNQ3SDbaANx0IykHwSSBbcdCTxit6uukHZqxkmTHPUQIYFL9S7tLj+8m4juOhWQ33YRGgDshll8fLD6IV+bXNThMpy+Qgf5oZvHGZ8177RpU13fooTtGxtG9zFZRVq9LFgNg01gD/lg4B041cwG1cLzrV5paWkZ/KcWrhGAB6rbwjprL5dxcnLyMF60FE6i8WXUN+L8fz8r29PJ6dc7N4MRAAAAAElFTkSuQmCC" alt="">
                            距结束
                        </span>
                        <span class="t">{{hr}}</span>：
                        <span class="t">{{min}}</span>：
                        <span class="t">{{sec}}</span>
                    </p>
                </div>
            </div>
            <div class="flashsale_list">
                    <ul>
                        <li v-for="(item,index) in FlashSaleProducts" :key="index" @click="handlerToFlashDetails()">
                            <div class="img_box">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div class="flashsale_list_name">{{item.ProductName}}</div>
                            <div class="flashsale_list_ActivityLabel"><span :class="item.ActivityLabel===null?'':'activityLabel'">{{item.ActivityLabel}}</span></div>
                            <div class="flashsale_list_price">
                                <span class="periodMoney">{{item.PeriodMoney | money}}</span>/<span class="unit">{{item.Unit | unit}}</span>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { clearInterval } from 'timers';
export default {
    name:"HomeFlashsale",
    data() {
        return {
            data:{},
            FlashSaleProducts:[],
            EndTime:"",
            newDate:"",
            day: 0, 
            hr: 0, 
            min: 0, 
            sec: 0,
            flag:false
        }
    },
    filters:{
        money(val){
            return '￥'+val.toFixed(2);
        },
        unit(val){
            return val==="g" ? "500g" : val
        }
    },
    created() {
            this.$axios.get("/api/sh/Home/FlashSaleRequest?sourcetype=9").then((res)=>{
            this.data=res.data.Data;
            this.EndTime=res.data.Data.EndTime
            this.FlashSaleProducts=res.data.Data.FlashSaleProducts;
            let imgUrl="http://picpro-sz.34580.com/sh/ImageUrl/558656/160.jpeg";
            this.FlashSaleProducts.forEach((data)=>{
                data.imgUrl=imgUrl;
            })
        })
    },
    mounted(){
        let time = setInterval(()=>{
                if(this.flag == true){
                    clearInterval(time)
                }
                this.getNewDate();
            },500)
    },
    methods:{
        handlerToFlashDetails(){
            this.$router.push("/flash_details")
        },
        getNewDate(){
            var end = this.EndTime.replace(/-/g,"/").replace(/T/g," ")
            const endtime=new Date(end).getTime()
            const now = Date.parse(new Date())
            const msec = endtime - now
            // let day = parseInt(msec / 1000 / 60 / 60 / 24)
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            // this.day = day
            this.hr = hr > 9 ? hr : '0'+hr
            this.min = min > 9 ? min : '0'+min
            this.sec = sec > 9 ? sec : '0'+sec
            if(msec <= 0){
                   this.flag = true
                   console.log(333)
               }
            // setInterval(function fn() {
            //     that.getNewDate()
            //     clearInterval
            // }, 16)
        }
    }        
}
</script>

<style scoped>
    .home_flashsale_box{
        width: 100%;
        height: 4.4156rem;
        background: #ffffff;
        padding: 0 0.3rem;
    }
    .flashsale_top{
        width: 6.9rem;
        height: 0.8756rem;
        padding: 0.2rem 0 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .flashsale_top .flashsale_text{
        width: 1.2rem;
        height: 0.44rem;
        color: #333;
        font-size: 0.3rem;
        font-weight: 700;
    }
    .flashsale_timer_text{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flashsale_timer_text img{
        width: 0.25rem;
        display: inline-block;
        margin-right: 0.1rem;
    }
    .flashsale_timer_text span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flashsale_timer_text .t{
        width: 0.3518rem;
        height: 0.3838rem;
        background:#333;
        margin:0 0.08rem;
        border-radius: 0.06rem;
        color: #ffffff
    }
    .flashsale_list ul{
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
    }
    .flashsale_list ul li{
        padding: 0 0.1rem 0.1rem 0;
    }
    .flashsale_list .img_box{
        width: 2.1rem;
        height: 2.1rem;
    }
    .flashsale_list .img_box>img{
        width: 100%;
    }
    .flashsale_list_name{
        width: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
        color: #333;
    }
    .flashsale_list_ActivityLabel{
        width: 2.1rem;
        height: 0.5rem;
        display: flex;
        align-items: center;
    }
    .activityLabel{
        max-width: 100%;
        display: inline-block;
        border: 0.02rem solid #ff550f;
        border-radius: 0.16rem;
        padding: 0.02rem 0.032rem;
        color: #ff550f;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .flashsale_list_price .periodMoney{
        color: #ff0000;
        font-size: 0.28rem;
    }
    .flashsale_list_price .unit{
        color: #aaaaaa;
    }
</style>
