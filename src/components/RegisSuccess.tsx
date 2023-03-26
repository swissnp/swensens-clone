import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function RegisSuccess() {
  const router = useRouter();
  const { SignUpSuccess } = router.query;
  const toastId = useRef(false);
  useEffect(() => {
    if (SignUpSuccess === 'true') {
      if (!toastId.current) {
        toastId.current = true;
        toast.success("สมัครสมาชิกสำเร็จ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, []);
  return (
    <div>
        <ToastContainer />
    </div>
  );
}
