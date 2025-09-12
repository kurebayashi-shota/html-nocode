import { useForm } from "@inertiajs/react"
import HeaderNav from "../Navigation/HeaderNav";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function NewProoject({auth}) {
    const { data, setData, post, put, processing, } = useForm({
        name : '',
        agenda : [''],
    });

  return (
    <>
      <HeaderNav auth={auth} />
      <GuestLayout>
        <h2>プロジェクトの作成</h2>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            post(route("home.store"),{
              // onFinish: () => reset('name'),
            });
          }}
          >
          <InputLabel htmlFor="title" value="プロジェクト名" />
          <TextInput onChange={(e)=>setData("name",e.target.value)} />
          {data.name}
          <div>
            <PrimaryButton
              onClick={()=>setData("agenda",[...data.agenda,""])}
              >
                目次の追加
            </PrimaryButton>
            <div>
              <ul>
                {data.agenda.map((item,index)=>(
                  <li key={index}>
                    <TextInput
                      onChange={(e)=>{
                        const agendaValue = [...data.agenda];
                        agendaValue[index] = e.target.value;
                        setData("agenda",agendaValue);
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PrimaryButton disabled={processing}>登録</PrimaryButton>
        </form>
      </GuestLayout>
    </>
  )
}
