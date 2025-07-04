<script>

    function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
    }
    function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 4) {
            getCodeBoxElement(index+ 1).focus();
        } else {
            getCodeBoxElement(index).blur();
                            mixpanel.track("Email Verification Proceed Web", {"distinct_id": userId });
                        $.ajax({
            method:"get",
            url:"/registeration/verify/emailOTP",
            data:{
                email: $('#email').val(),
                otp: $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val(),
            },
            success:function(response){
                if(response.success==0){
                    $('.error_message').addClass('shake')
                    $('.error_message').html(response.user_message + ' !')
                   setTimeout(() => {
                    window.location.reload()
                   }, 1000);
                }
                else{
                    $('.error_message').html("")
                    window.location.reload()
                }
            },
            error:function(response){
                
            }
        });     
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
    }
    function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
    }
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1019760,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://chrisrathana.smile.shop/c/hotjar-','.js?sv=');
</script>
