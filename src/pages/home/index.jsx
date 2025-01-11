import React , { useState, useEffect } from "react"
import CustomArticles from "../../components/common/CustomArticles";
import CustomArticleText from "../../components/common/CustomArticleText";
import ApiDataHook from '../../hook/ApiDataHook';
import CustomArt from "../../components/common/CustomArt";
const HomePage = () => {
    const { data: dataCards, loading: loadingData, error: errorData } = ApiDataHook('/data');
    const { data: dataArticleText} = ApiDataHook('/articlestext');
    const { data: dataArt} = ApiDataHook('/artdata');
    // const [cardData, setCardData] = useState([]);

    // useEffect(() => {
    //     getCards("/data", (data) => {
    //         setCardData(data)
    //     })
    // },[])

    // console.log(cardData)

  return (
    <>
    <div className="max-w-screen-lg container mx-auto my-10 sm:p-6">
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
  <div className="max-w-screen-lg container mx-auto my-10 sm:p-6">
    <div className="grid grid-cols-3 sm:grid-cols-12 lg:grid-cols-3 gap-4">
      
      <div className="sm:col-span-12 lg:col-span-3">
        {
          dataArt && dataArt.map((card, index) => (
            <CustomArt
              key={index} {...card}
            />
          ))
        }
      </div>  
    </div>
  </div>
    
    </>
  

  
  
  )
}

export default HomePage