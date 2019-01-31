const handleImg = {
    attachImageUrl(srcUrl) {
        if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },
    attachBodyContent(body) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    }    
}

export {handleImg}