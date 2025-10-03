import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddLiElements({data, pages, errors, setData, }) {
    let fieldName;
    let isObject = false;
  
    switch (data.layout_id) {
      case "1":
      case "2":
        return null;
      case "3":
        fieldName = "li_elements";
        break;
      case "4":
      case "5":
        fieldName = "obj_elements";
        isObject = true;
        break;
      default:
        return null;
    }
  
    const handleChange = (index, valueOrField, value) => {
      const updated = [...data[fieldName]];
      if (isObject) {
        updated[index][valueOrField] = value;
      } else {
        updated[index] = valueOrField;
      }
      setData(fieldName, updated);
    };
  
    const addElement = () => {
      const newElement = isObject ? { title: "", value: "" } : "";
      setData(fieldName, [...data[fieldName], newElement]);
    };
  
    const removeElement = (index) => {
      const updated = data[fieldName].filter((_, i) => i !== index);
      setData(fieldName, updated);
    };
    return (
      <div className="">
        <div className="flex">
          <InputLabel htmlFor={fieldName} value="リスト項目" />
          <button
            type="button"
            onClick={addElement}
            className="ml-[4rem] text-[0.8rem] text-white border-[1px] bg-[#374151] rounded-md px-[5px] hover:bg-gray-600"
            >
            +項目追加
          </button>
        </div>
  
        {data[fieldName].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mt-1">
            {isObject ? (
              <>
                <TextInput
                  placeholder="タイトル"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                  />
                <TextInput
                  placeholder="内容"
                  value={item.value}
                  onChange={(e) =>
                    handleChange(index, "value", e.target.value)
                  }
                  />
              </>
            ) : (
              <TextInput
                value={item}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`リスト項目 ${index + 1}`}
              />
            )}
            <button
              type="button"
              onClick={() => removeElement(index)}
              className="bg-[tomato] text-white rounded-md py-[0.4rem] hover:bg-[red]"
              >
              <DeleteIcon />
            </button>
          </div>
        ))}
  
        <InputError message={errors[fieldName]} className="mt-2" />
      </div>
    );
  }
