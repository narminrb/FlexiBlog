import React , { useState, useEffect } from "react"
import CustomArticles from "../../components/common/CustomArticles";
import CustomArticleText from "../../components/common/CustomArticleText";
import ApiDataHook from '../../hook/ApiDataHook';
import CustomArt from "../../components/common/CustomArt";
import CustomPublished from "../../components/common/CustomPublished";
import CustomSubscribe from "../../components/common/CustomSubscribe";
// import CustomPagination from "../../components/common/CustomPagination";
const HomePage = () => {
    const { data: dataCards, loading: loadingData, error: errorData } = ApiDataHook('/data');
    const { data: dataArticleText} = ApiDataHook('/articlestext');
    const { data: dataArt} = ApiDataHook('/artdata');
    const { data: dataPublished} = ApiDataHook('/publisheddata');
    // const [cardData, setCardData] = useState([]);

    // useEffect(() => {
    //     getCards("/data", (data) => {
    //         setCardData(data)
    //     })
    // },[])

    // console.log(cardData)

  return (
    <>
    <div className="max-w-screen-lg container mx-auto p-3 my-10 flex items-center">
      <div className="w-[5px] h-[30px] bg-[#E2E8F0] mr-4 rounded-sm"></div>
  <h1 style={{ color: "#2d3748",lineHeight: "1.33",fontWeight: "bold",fontSize: "1.5rem",padding:'10px'}} className="">Suggested Articles</h1>
</div>


    {/* section1 */}
    <div className="max-w-screen-lg container mx-auto my-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
      
      <div className="sm:col-span-2 lg:col-span-8">
        {
          dataCards && dataCards.map((card, index) => (
            <CustomArticles
              key={index} {...card}
            />
          ))
        }
      </div>
  
      <div className="sm:col-span-2 lg:col-span-4">
          <div className="sm:col-span-2 lg:col-span-12">
          {dataArticleText && dataArticleText.map((card, index) => (
                <CustomArticleText
                key={index}
                {...card}
                className="w-full"
                />
            ))}
          </div>
</div>


  
    </div>
  </div>
  {/* section2 */}
  <div className="max-w-screen-lg container mx-auto my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  {
    dataArt && dataArt.map((card, index) => (
      <CustomArt
        key={index} {...card}
      />
    ))
  }
</div>

      <div className="max-w-screen-lg container p-3 mx-auto my-10 flex items-center">
            <div className="w-[5px] h-[30px] bg-[#E2E8F0] mr-4 rounded-sm"></div>
        <h1 style={{ color: "#2d3748",lineHeight: "1.33",fontWeight: "bold",fontSize: "1.5rem",padding:'10px'}} className="">Recently Published</h1>
      </div>
    {/* section3 */}
      <div className="max-w-screen-lg container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {
    dataPublished && dataPublished.map((card, index) => (
      <CustomPublished
        key={index} {...card}
      />
    ))
  }
</div>
{/* <div className="max-w-screen-lg container mx-auto grid grid-cols-1">
  <CustomPagination />
</div> */}

    {/* section4 */}
    <div className="max-w-screen-lg container mx-auto grid grid-cols-1">
  <CustomSubscribe />
</div>


    </>
  

  
  
  )
}

export default HomePage