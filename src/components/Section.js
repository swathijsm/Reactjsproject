function Section(prop){
const {title, children}=prop;
return(
    <>
    <h2 className="margin10">{title}</h2>
    {children}
    </>
)
}
export default Section;