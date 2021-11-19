import React from "react";
import Common from "./Common/Common";
import Loading from "./LoadingScreen/Loading";

export default function Design() {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    
    <div>
      {loading && <Loading />}
      {!loading && <Common />}
    </div>
  );
}
