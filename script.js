<script>
    console.log('Hello World!');
    
    let i = 0;
    setInterval(() => {
        document.body.innerHTML += '<span style="font-size: ' + (i++ * 10) + 'px;">' + 'Hello World!' + '</span>';
    }, 100);
</script>