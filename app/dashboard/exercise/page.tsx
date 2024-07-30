import data from "../../../data.json";

export default async function ExercisePage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
        {data.map((item) => (
          <div className="card  glass w-96 border-2 " key={item?.id}>
            <figure className="w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <div>
                {item?.category} {item?.equipment} {item.force} {item?.level}
              </div>
              <div>
                {item.instructions?.map((ins, index) => (
                  <p key={ins} className="text-sm">
                    <span className="text-justify">
                      <b>{index + 1}. </b>
                      {ins}
                    </span>
                    <br></br>
                  </p>
                ))}
                <></>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
