export default function CustomImage({imgSrc, pt, alt}){
    const hasImage = imgSrc.length > 0;
    if(!hasImage) {
        alt = "Image bientôt disponible";
    }
    console.log(alt);
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgSrc} alt={alt} />
        </div>
    )
}