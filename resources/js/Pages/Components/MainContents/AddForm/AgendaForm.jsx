import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function AgendaForm({ data, setData, }) {
  return (
    <>
        <PrimaryButton
            onClick={()=>setData("agenda",[...data.agenda,""])}
            type="button"
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
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}
