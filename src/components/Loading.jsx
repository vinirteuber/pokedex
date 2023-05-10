import loading from "../assets/loading.gif";

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="" />
      <div>
        <span>Carregando...</span>
      </div>
    </div>
  );
}

export default Loading;
