import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn cần nhập đúng trường này"),
      email: Yup.string()
        .required("Bạn cần nhập đúng trường này")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "bạn cần nhập đúng email"
        ),
      password: Yup.string().required("bạn cần nhập đúng trường này"),
      passwordConfirm: Yup.string()
        .required("bạn cần nhập đúng trường này")
        .oneOf([Yup.ref("password"), null], "Vui lòng nhập đúng mật khẩu"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full  my-[50px]">
      <div className="bg-[#ccc] p-[20px]  md:w-[500px] md:m-auto rounded-[10px] mx-[20px]">
        <h1 className="md:text-[1.7rem]  text-[1.5rem] font-bold mt-[20px]  text-center">
          Thành viên đăng ký
        </h1>
        <p className="md:text-[1.2rem] text-[0.9rem] my-[20px] text-center">
          Cùng nhau mua giày đẹp tại FLC nha mọi người
        </p>

        <form action="" onSubmit={formik.handleSubmit} className='mt-[50px]'>
          <div
            className="my-[15px]
        "
          >
            <label className="block  md:text-[1.2rem] text-[1rem] from-neutral-800">
              Tên đầy đủ
            </label>
            {formik.errors.name ? (
              <input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="password"
                placeholder="VD:Ngọc Dương"
                className="formikerror"
              />
            ) : (
              <input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                placeholder="VD:Ngọc Dương"
                className="formik"
             
              />
            )}

            {formik.errors.name && (
              <small className="block md:text-[1rem]  text-[0.9rem] text-[red]">
                {formik.errors.name}
              </small>
            )}
          </div>
          <div
            className="my-[15px]
        "
          >
            <label className="block   md:text-[1.2rem] text-[1rem] from-neutral-800">
              Email
            </label>

            {formik.errors.email ? (
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="VD:email@gmail.com"
                className="formikerror"
              />
            ) : (
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="VD:email@gmail.com"
                className="formik"
              />
            )}

            {formik.errors.email && (
              <small className="block md:text-[1rem]  text-[0.9rem] text-[red]">
                {formik.errors.email}
              </small>
            )}
          </div>
          <div
            className="my-[15px]
        "
          >
            <label className="block  md:text-[1.2rem] text-[1rem] from-neutral-800 font-mediumd">
              Mật khẩu
            </label>
            {formik.errors.password ? (
              <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Nhập mật khẩu"
                className="formikerror"
              />
            ) : (
              <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Nhập mật khẩu"
                className="formik"
              />
            )}
            {formik.errors.password && (
              <small className="block md:text-[1rem]  text-[0.9rem] text-[red]">
                {formik.errors.password}
              </small>
            )}
          </div>
          <div
            className="my-[16px]
        "
          >
            <label className="block  md:text-[1.2rem] text-[1rem] from-neutral-800">
              Nhập lại mật khẩu
            </label>
            {formik.errors.passwordConfirm ? (
              <input
                name="passwordConfirm"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                type="password"
                placeholder="Nhập Lại mật khẩu"
                className="formikerror"
              />
            ) : (
              <input
                name="passwordConfirm"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                type="password"
                placeholder="Nhập Lại mật khẩu"
                className="formik"
              />
            )}
            {formik.errors.passwordConfirm && (
              <small className="block md:text-[1rem]  text-[0.9rem] text-[red]">
                {formik.errors.passwordConfirm}
              </small>
            )}
          </div>
        </form>
        <div className="formikbtn">
          <button className="text-white items-center w-[100%]  font-extrabold">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
