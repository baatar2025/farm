
export const Husnegt2 = () => {
    const farmData = [{},{},{},{}]

  return (
    <div>
        <h1></h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>техинлогийн ажилын нэр</th>
              <th>хэмжих нэгж</th>
              <th>ажилын хэмжээ</th>
              <th>ажил явуулах хугацаа/сар,өдөр/</th>
              <th>ажилах агергатын шараадаглах бүрэлдэхүүн 1 га-д</th>
              <th>шараадагдах дизель түлщ /л/</th>
              <th>Ээлжийн норм</th>
              <th>шараадагдах хүн өдөр</th>
            </tr>
          </thead>
          <tbody>
          {
            
            farmData.map((_,index:number)=>{
              return(
              <tr className="bg-base-200">
                <th>{index+1}</th>
                <th>12</th>
                <th>хэмжих нэгж</th>
                <th>ажилын хэмжээ</th>
                <th>ажил явуулах хугацаа/сар,өдөр/</th>
                <th>ажилах агергатын шараадаглах бүрэлдэхүүн 1 га-д</th>
                <th>шараадагдах дизель түлщ /л/</th>
                <th>Ээлжийн норм</th>
                <th>шараадагдах хүн өдөр</th>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
