import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./form.css";
import {
  fetchProviderGroup,
  fetchProviderUnit,
  Lab,
  providerGroup,
  providerUnit,
  saveLab,
} from "../../Store/Lab.ts";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { useEffect } from "react";

const AddLabForm: React.FC = () => {
  const providerGroupStore = useStore(providerGroup);
  const providerUnitStore = useStore(providerUnit);

  useEffect(fetchProviderGroup, []);
  useEffect(fetchProviderUnit, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Lab>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Lab> = async (data: FieldValues) => {
    console.log(JSON.stringify(data, null, 2));
    await saveLab(data as unknown as Lab);
    if (confirm("Lab Added! Continue Adding?")) {
      navigate("/");
    } else {
      navigate("/add/lab");
    }
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #d3dae4",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <legend>Details</legend>
        <div className={"fieldContainer"}>
          <label htmlFor={"labName"}>
            Lab name{" "}
            <input type="text" {...register("labName", { required: true })} />
          </label>
          <label htmlFor={"providerGroup"}>
            Provider Group{" "}
            <select
              placeholder="Provider Group"
              {...register("providerGroup", { required: true })}
            >
              {providerGroupStore.map((group) => (
                <option value={group}>{group}</option>
              ))}
            </select>
          </label>
          <label htmlFor={"providerUnit"}>
            Provider Unit{" "}
            <select {...register("providerUnit", { required: true })}>
              {providerUnitStore.map((group) => (
                <option value={group}>{group}</option>
              ))}
            </select>
          </label>
          <label htmlFor={"address"}>
            Address{" "}
            <textarea
              placeholder={"Address"}
              {...register("address", { maxLength: 500 })}
            />
          </label>
          <label htmlFor={"State"}>
            State{" "}
            <select {...register("state")}>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </label>
          <label htmlFor={"city"}>
            City{" "}
            <select {...register("city")}>
              <option value="NYC">NYC</option>
              <option value="Washington:Chicago">Washington:Chicago</option>
            </select>
          </label>
          <label htmlFor={"zipCode"}>
            Zip Code
            <input
              type="number"
              placeholder="Zip Code"
              {...register("zipCode", { pattern: /^\d{5}(?:[-\s]\d{4})?$/i })}
            />
          </label>
          <label htmlFor={"mobileNumber"}>
            Mobile number{" "}
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </label>
          <label htmlFor={"officePhone"}>
            Office Phone{" "}
            <input
              type="tel"
              placeholder="Office Phone"
              {...register("officePhone")}
            />
          </label>
          <label htmlFor={"mobile"}>
            Mobile{" "}
            <input
              type="tel"
              placeholder="Mobile"
              {...register("mobile", {})}
            />
          </label>
          <label htmlFor={"email"}>
            Email{" "}
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
        </div>
      </fieldset>
      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #d3dae4",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <legend>Portal Time zone</legend>
        <div className={"fieldContainer"}>
          <label htmlFor={"timezone"}>
            Timezone{" "}
            <select {...register("timezone")}>
              <option value="Australian Central Daylight Savings Time">
                Australian Central Daylight Savings Time
              </option>
              <option value="Australian Central Standard Time">
                Australian Central Standard Time
              </option>
              <option value="Acre Time">Acre Time</option>
              <option value="ASEAN Common Time">ASEAN Common Time</option>
              <option value="Atlantic Daylight Time">
                Atlantic Daylight Time
              </option>
              <option value="Australian Eastern Daylight Savings Time">
                Australian Eastern Daylight Savings Time
              </option>
              <option value="Australian Eastern Standard Time">
                Australian Eastern Standard Time
              </option>
              <option value="Afghanistan Time">Afghanistan Time</option>
              <option value="Alaska Daylight Time">Alaska Daylight Time</option>
              <option value="Alaska Standard Time">Alaska Standard Time</option>
              <option value="Amazon Summer Time (Brazil)[1]">
                Amazon Summer Time (Brazil)[1]
              </option>
              <option value="Amazon Time (Brazil)[2]">
                Amazon Time (Brazil)[2]
              </option>
              <option value="Armenia Time">Armenia Time</option>
              <option value="Argentina Time">Argentina Time</option>
              <option value="Arabia Standard Time">Arabia Standard Time</option>
              <option value="Atlantic Standard Time">
                Atlantic Standard Time
              </option>
              <option value="Australian Western Standard Time">
                Australian Western Standard Time
              </option>
              <option value="Azores Summer Time">Azores Summer Time</option>
              <option value="Azores Standard Time">Azores Standard Time</option>
              <option value="Azerbaijan Time">Azerbaijan Time</option>
              <option value="Brunei Time">Brunei Time</option>
              <option value="British Indian Ocean Time">
                British Indian Ocean Time
              </option>
              <option value="Baker Island Time">Baker Island Time</option>
              <option value="Bolivia Time">Bolivia Time</option>
              <option value="Brasilia Summer Time">Brasilia Summer Time</option>
              <option value="Brasilia Time">Brasilia Time</option>
              <option value="Bangladesh Standard Time">
                Bangladesh Standard Time
              </option>
              <option value="Bougainville Standard Time[3]">
                Bougainville Standard Time[3]
              </option>
              <option value="British Summer Time (British Standard Time from Feb 1968 to Oct 1971)">
                British Summer Time (British Standard Time from Feb 1968 to Oct
                1971)
              </option>
              <option value="Bhutan Time">Bhutan Time</option>
              <option value="Central Africa Time">Central Africa Time</option>
              <option value="Cocos Islands Time">Cocos Islands Time</option>
              <option value="Central Daylight Time (North America)">
                Central Daylight Time (North America)
              </option>
              <option value="Cuba Daylight Time[4]">
                Cuba Daylight Time[4]
              </option>
              <option value="Central European Summer Time (Cf. HAEC)">
                Central European Summer Time (Cf. HAEC)
              </option>
              <option value="Central European Time">
                Central European Time
              </option>
              <option value="Chatham Daylight Time">
                Chatham Daylight Time
              </option>
              <option value="Chatham Standard Time">
                Chatham Standard Time
              </option>
              <option value="Choibalsan Standard Time">
                Choibalsan Standard Time
              </option>
              <option value="Choibalsan Summer Time">
                Choibalsan Summer Time
              </option>
              <option value="Chamorro Standard Time">
                Chamorro Standard Time
              </option>
              <option value="Chuuk Time">Chuuk Time</option>
              <option value="Clipperton Island Standard Time">
                Clipperton Island Standard Time
              </option>
              <option value="Central Indonesia Time">
                Central Indonesia Time
              </option>
              <option value="Cook Island Time">Cook Island Time</option>
              <option value="Chile Summer Time">Chile Summer Time</option>
              <option value="Chile Standard Time">Chile Standard Time</option>
              <option value="Colombia Summer Time">Colombia Summer Time</option>
              <option value="Colombia Time">Colombia Time</option>
              <option value="Central Standard Time (North America)">
                Central Standard Time (North America)
              </option>
              <option value="China Standard Time">China Standard Time</option>
              <option value="Central Standard Time (Australia)">
                Central Standard Time (Australia)
              </option>
              <option value="Central Summer Time (Australia)">
                Central Summer Time (Australia)
              </option>
              <option value="Cuba Standard Time">Cuba Standard Time</option>
              <option value="China time">China time</option>
              <option value="Cape Verde Time">Cape Verde Time</option>
              <option value="Central Western Standard Time (Australia) unofficial">
                Central Western Standard Time (Australia) unofficial
              </option>
              <option value="Christmas Island Time">
                Christmas Island Time
              </option>
              <option value="Davis Time">Davis Time</option>
              <option value="Dumont d'Urville Time">
                Dumont d'Urville Time
              </option>
              <option value="AIX specific equivalent of Central European Time[5]">
                AIX specific equivalent of Central European Time[5]
              </option>
              <option value="Easter Island Summer Time">
                Easter Island Summer Time
              </option>
              <option value="Easter Island Standard Time">
                Easter Island Standard Time
              </option>
              <option value="East Africa Time">East Africa Time</option>
              <option value="Eastern Caribbean Time (does not recognise DST)">
                Eastern Caribbean Time (does not recognise DST)
              </option>
              <option value="Ecuador Time">Ecuador Time</option>
              <option value="Eastern Daylight Time (North America)">
                Eastern Daylight Time (North America)
              </option>
              <option value="Eastern Summer Time (Australia)">
                Eastern Summer Time (Australia)
              </option>
              <option value="Eastern European Summer Time">
                Eastern European Summer Time
              </option>
              <option value="Eastern European Time">
                Eastern European Time
              </option>
              <option value="Eastern Greenland Summer Time">
                Eastern Greenland Summer Time
              </option>
              <option value="Eastern Greenland Time">
                Eastern Greenland Time
              </option>
              <option value="Eastern Indonesian Time">
                Eastern Indonesian Time
              </option>
              <option value="Eastern Standard Time (North America)">
                Eastern Standard Time (North America)
              </option>
              <option value="Eastern Standard Time (Australia)">
                Eastern Standard Time (Australia)
              </option>
              <option value="Further-eastern European Time">
                Further-eastern European Time
              </option>
              <option value="Fiji Time">Fiji Time</option>
              <option value="Falkland Islands Summer Time">
                Falkland Islands Summer Time
              </option>
              <option value="Falkland Islands Time">
                Falkland Islands Time
              </option>
              <option value="Fernando de Noronha Time">
                Fernando de Noronha Time
              </option>
              <option value="Galapagos Time">Galapagos Time</option>
              <option value="Gambier Islands">Gambier Islands</option>
              <option value="Georgia Standard Time">
                Georgia Standard Time
              </option>
              <option value="French Guiana Time">French Guiana Time</option>
              <option value="Gilbert Island Time">Gilbert Island Time</option>
              <option value="Gambier Island Time">Gambier Island Time</option>
              <option value="Greenwich Mean Time">Greenwich Mean Time</option>
              <option value="South Georgia and the South Sandwich Islands">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="Gulf Standard Time">Gulf Standard Time</option>
              <option value="Guyana Time">Guyana Time</option>
              <option value="Hawaii-Aleutian Daylight Time">
                Hawaii-Aleutian Daylight Time
              </option>
              <option value="Heure Avancée d'Europe Centrale francised name for CEST">
                Heure Avancée d'Europe Centrale francised name for CEST
              </option>
              <option value="Hawaii-Aleutian Standard Time">
                Hawaii-Aleutian Standard Time
              </option>
              <option value="Hong Kong Time">Hong Kong Time</option>
              <option value="Heard and McDonald Islands Time">
                Heard and McDonald Islands Time
              </option>
              <option value="Khovd Summer Time">Khovd Summer Time</option>
              <option value="Khovd Standard Time">Khovd Standard Time</option>
              <option value="Indochina Time">Indochina Time</option>
              <option value="Israel Daylight Time">Israel Daylight Time</option>
              <option value="Indian Ocean Time">Indian Ocean Time</option>
              <option value="Iran Daylight Time">Iran Daylight Time</option>
              <option value="Irkutsk Time">Irkutsk Time</option>
              <option value="Iran Standard Time">Iran Standard Time</option>
              <option value="Indian Standard Time">Indian Standard Time</option>
              <option value="Irish Standard Time[6]">
                Irish Standard Time[6]
              </option>
              <option value="Israel Standard Time">Israel Standard Time</option>
              <option value="Japan Standard Time">Japan Standard Time</option>
              <option value="Kyrgyzstan time">Kyrgyzstan time</option>
              <option value="Kosrae Time">Kosrae Time</option>
              <option value="Krasnoyarsk Time">Krasnoyarsk Time</option>
              <option value="Korea Standard Time">Korea Standard Time</option>
              <option value="Lord Howe Standard Time">
                Lord Howe Standard Time
              </option>
              <option value="Lord Howe Summer Time">
                Lord Howe Summer Time
              </option>
              <option value="Line Islands Time">Line Islands Time</option>
              <option value="Magadan Time">Magadan Time</option>
              <option value="Marquesas Islands Time">
                Marquesas Islands Time
              </option>
              <option value="Mawson Station Time">Mawson Station Time</option>
              <option value="Mountain Daylight Time (North America)">
                Mountain Daylight Time (North America)
              </option>
              <option value="Middle European Time Same zone as CET">
                Middle European Time Same zone as CET
              </option>
              <option value="Middle European Summer Time Same zone as CEST">
                Middle European Summer Time Same zone as CEST
              </option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Macquarie Island Station Time">
                Macquarie Island Station Time
              </option>
              <option value="Marquesas Islands Time">
                Marquesas Islands Time
              </option>
              <option value="Myanmar Standard Time">
                Myanmar Standard Time
              </option>
              <option value="Moscow Time">Moscow Time</option>
              <option value="Malaysia Standard Time">
                Malaysia Standard Time
              </option>
              <option value="Mountain Standard Time (North America)">
                Mountain Standard Time (North America)
              </option>
              <option value="Mauritius Time">Mauritius Time</option>
              <option value="Maldives Time">Maldives Time</option>
              <option value="Malaysia Time">Malaysia Time</option>
              <option value="New Caledonia Time">New Caledonia Time</option>
              <option value="Newfoundland Daylight Time">
                Newfoundland Daylight Time
              </option>
              <option value="Norfolk Time">Norfolk Time</option>
              <option value="Nepal Time">Nepal Time</option>
              <option value="Newfoundland Standard Time">
                Newfoundland Standard Time
              </option>
              <option value="Newfoundland Time">Newfoundland Time</option>
              <option value="Niue Time">Niue Time</option>
              <option value="New Zealand Daylight Time">
                New Zealand Daylight Time
              </option>
              <option value="New Zealand Standard Time">
                New Zealand Standard Time
              </option>
              <option value="Omsk Time">Omsk Time</option>
              <option value="Oral Time">Oral Time</option>
              <option value="Pacific Daylight Time (North America)">
                Pacific Daylight Time (North America)
              </option>
              <option value="Peru Time">Peru Time</option>
              <option value="Kamchatka Time">Kamchatka Time</option>
              <option value="Papua New Guinea Time">
                Papua New Guinea Time
              </option>
              <option value="Phoenix Island Time">Phoenix Island Time</option>
              <option value="Philippine Time">Philippine Time</option>
              <option value="Pakistan Standard Time">
                Pakistan Standard Time
              </option>
              <option value="Saint Pierre and Miquelon Daylight time">
                Saint Pierre and Miquelon Daylight time
              </option>
              <option value="Saint Pierre and Miquelon Standard Time">
                Saint Pierre and Miquelon Standard Time
              </option>
              <option value="Pohnpei Standard Time">
                Pohnpei Standard Time
              </option>
              <option value="Pacific Standard Time (North America)">
                Pacific Standard Time (North America)
              </option>
              <option value="Philippine Standard Time">
                Philippine Standard Time
              </option>
              <option value="Paraguay Summer Time (South America)[7]">
                Paraguay Summer Time (South America)[7]
              </option>
              <option value="Paraguay Time (South America)[8]">
                Paraguay Time (South America)[8]
              </option>
              <option value="Réunion Time">Réunion Time</option>
              <option value="Rothera Research Station Time">
                Rothera Research Station Time
              </option>
              <option value="Sakhalin Island time">Sakhalin Island time</option>
              <option value="Samara Time">Samara Time</option>
              <option value="South African Standard Time">
                South African Standard Time
              </option>
              <option value="Solomon Islands Time">Solomon Islands Time</option>
              <option value="Seychelles Time">Seychelles Time</option>
              <option value="Singapore Time">Singapore Time</option>
              <option value="Sri Lanka Standard Time">
                Sri Lanka Standard Time
              </option>
              <option value="Srednekolymsk Time">Srednekolymsk Time</option>
              <option value="Suriname Time">Suriname Time</option>
              <option value="Samoa Standard Time">Samoa Standard Time</option>
              <option value="Singapore Standard Time">
                Singapore Standard Time
              </option>
              <option value="Showa Station Time">Showa Station Time</option>
              <option value="Tahiti Time">Tahiti Time</option>
              <option value="Thailand Standard Time">
                Thailand Standard Time
              </option>
              <option value="Indian/Kerguelen">Indian/Kerguelen</option>
              <option value="Tajikistan Time">Tajikistan Time</option>
              <option value="Tokelau Time">Tokelau Time</option>
              <option value="Timor Leste Time">Timor Leste Time</option>
              <option value="Turkmenistan Time">Turkmenistan Time</option>
              <option value="Turkey Time">Turkey Time</option>
              <option value="Tonga Time">Tonga Time</option>
              <option value="Tuvalu Time">Tuvalu Time</option>
              <option value="Ulaanbaatar Summer Time">
                Ulaanbaatar Summer Time
              </option>
              <option value="Ulaanbaatar Standard Time">
                Ulaanbaatar Standard Time
              </option>
              <option value="Kaliningrad Time">Kaliningrad Time</option>
              <option value="Coordinated Universal Time">
                Coordinated Universal Time
              </option>
              <option value="Uruguay Summer Time">Uruguay Summer Time</option>
              <option value="Uruguay Standard Time">
                Uruguay Standard Time
              </option>
              <option value="Uzbekistan Time">Uzbekistan Time</option>
              <option value="Venezuelan Standard Time">
                Venezuelan Standard Time
              </option>
              <option value="Vladivostok Time">Vladivostok Time</option>
              <option value="Volgograd Time">Volgograd Time</option>
              <option value="Vostok Station Time">Vostok Station Time</option>
              <option value="Vanuatu Time">Vanuatu Time</option>
              <option value="Wake Island Time">Wake Island Time</option>
              <option value="West Africa Summer Time">
                West Africa Summer Time
              </option>
              <option value="West Africa Time">West Africa Time</option>
              <option value="Western European Summer Time">
                Western European Summer Time
              </option>
              <option value="Western European Time">
                Western European Time
              </option>
              <option value="Western Indonesian Time">
                Western Indonesian Time
              </option>
              <option value="Western Standard Time">
                Western Standard Time
              </option>
              <option value="Yakutsk Time">Yakutsk Time</option>
              <option value="Yekaterinburg Time">Yekaterinburg Time</option>
            </select>
          </label>
        </div>
      </fieldset>
      <input
        type="submit"
        value={"Register Lab"}
        style={{
          width: "min-content",
          padding: 8,
          background: "#84B94F",
          borderRadius: 8,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          color: "white",
          fontSize: 14,
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      />
    </form>
  );
};

export default AddLabForm;
