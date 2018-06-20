<template>
  <div class="footer">
    <p class="bottomLinks"><a target="_black" href="../public/Friendship_link.html">Links</a><a href="javascript:;">Privacy policy</a><a href="javascript:;">Copyright Statement</a><a href="../aboutus/visit-service.html?visit=1#visitIn">Floor Map</a><a href="../aboutus/contact-us.html">Contact Us</a></p>
    <p>Copyright © 2008-<span>{{newYear}}</span> shenzhenmuseum.com,All Rights Reserved</p>
  </div>
</template>
<script>
export default{
  data() {
    return {
      newYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
  .footer{min-width:100%;margin:0 auto;color:#333333;font-size: 14px; text-align: center;background-color:#333333;position:relative;z-index: 2;}
  .footer p{font-size:14px; line-height:14px;color:#fff; text-align: center;margin-bottom: 21px;}
  .footer p.bottomLinks{font-size:16px; line-height:16px;color:#fff; text-align: center;}
  .footer p.bottomLinks a{font-size:14px; color:#fff;padding:0 20px;font-family: "Microsoft Yahei", "Microsoft Yahei"!important;}
  .footer p.bottomLinks a:hover{color:rgba(255,255,255,0.8);}
  .relevantMsg li{position:relative;}
  .relevantMsg li span{position:absolute;right:0;font-size:16px;color:#999999;line-height:36px;}
  .relevantMsg a{display:inline-block;font-size:16px;color:#666666;line-height: 36px;width:800px;}
  .footer p:last-child{margin-bottom:0;}
  .footer{position:relative;width:1200px;margin:0 auto;padding:20px 0;background:#333333;}
</style>
