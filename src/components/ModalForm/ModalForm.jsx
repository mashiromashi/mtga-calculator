/* eslint-disable require-jsdoc */
import React from "react";
import useForm from "react-hook-form";

// todo : gem net calculation

export default function ModalForm() {
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => {
    JSON.stringify(data);
    calculateGemNet();
    console.log(data);
  };
  console.log(errors);

  const calculateGemNet = () => {
    const gemPrize = parseInt(getValues().gemPrize);
    const gemGrind = parseInt(getValues().gemGrind);
    const gemCost = parseInt(getValues().gemCost);
    const prizegrind = gemPrize + gemGrind;
    const net = prizegrind - gemCost;
    console.log(net);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Account</label>
        <select name="account" ref={register({ required: true })}>
          <option disabled selected>
            Please select one
          </option>
          <option value="f2p">F2P</option>
          <option value="paid">Paid</option>
        </select>
      </div>

      <div>
        <label>Stakes</label>
        <select name="stakes" ref={register({ required: true })}>
          <option disabled selected>
            Please select one
          </option>
          <option value="traditional">Traditional</option>
          <option value="ranked">Ranked</option>
          <option value="stipulation">Stipulation</option>
          <option value="unranked">Unranked</option>
          <option value="na">N/A</option>
        </select>
      </div>

      <div>
        <label>Format</label>
        <select name="format" ref={register({ required: true })}>
          <option disabled selected>
            Please select one
          </option>
          <option value="ranked">Ranked</option>
          <option value="draft">Draft</option>
          <option value="sealed">Sealed</option>
          <option value="Greedy">Greedy</option>
          <option value="Omni">Omni</option>
          <option value="na">N/A</option>
        </select>
      </div>
      <div>
        <label>Set</label>
        <select name="set" ref={register({ required: true })}>
          <option disabled selected>
            Please select one
          </option>
          <option value="BU">BU</option>
          <option value="DOM">DOM</option>
          <option value="ELD">ELD</option>
          <option value="GRN">GRN</option>
          <option value="GRN/RNA">GRN/RNA</option>
          <option value="M19">M19</option>
          <option value="M20">M20</option>
          <option value="na">N/A</option>
          <option value="RIX">RIX</option>
          <option value="RNA">RNA</option>
          <option value="WAR">WAR</option>
        </select>
      </div>
      <div>
        <label htmlFor="win">Win</label>
        <input
          type="number"
          name="win"
          placeholder="Please Input your win count for this draft"
          ref={register({
            required: "Please input your win count",
            min: {
              value: 0,
              message: "Win count can not be less than 0"
            },
            max: {
              value: 7,
              message: "Win count can not be more than 7"
            }
          })}
        />
        {errors.win && <p>{errors.win.message}</p>}
      </div>
      <div>
        <label htmlFor="loss">Loss</label>
        <input
          type="number"
          name="loss"
          placeholder="Please input your loss count for this draft"
          ref={register({
            required: "Please input your loss count",
            min: {
              value: 0,
              message: "loss count can not be less than 0"
            },
            max: {
              value: 7,
              message: "loss count can not be more than 7"
            }
          })}
        />
        {errors.loss && <p>{errors.loss.message}</p>}
      </div>
      <div>
        <label htmlFor="goldCost">Gold Cost</label>
        <input
          type="number"
          name="goldCost"
          placeholder="Please input your gold cost for this draft"
          ref={register({
            min: { value: 0, message: "Gold count can not be less than 0" },
            max: {
              value: 5500,
              message: "Gold count can not be more than 5000"
            }
          })}
        />
        {errors.goldCost && <p>{errors.goldCost.message}</p>}
      </div>
      <div>
        <label htmlFor="gemCost">Gem Cost</label>
        <input
          type="number"
          name="gemCost"
          id=""
          placeholder="Please input your gem cost for this draft"
          ref={register({
            required: "Please input your gem cost",
            min: { value: 0, message: "Gem count can not be less than 0" },
            max: { value: 2000, message: "Gem count can not be more than 2000" }
          })}
        />
        {errors.gemCost && <p>{errors.gemCost.message}</p>}
      </div>
      <div>
        <label htmlFor="Gem Prize">Gem Prize</label>
        <input
          type="number"
          name="gemPrize"
          id=""
          placeholder="Please input gem obtained from the draft"
          ref={register({
            required: "Please input gem prize",
            min: { value: 0, message: "Gem count can not be less than 0" },
            max: { value: 2200, message: "Gem Prize can not be more than 2200" }
          })}
        />
        {errors.gemPrize && <p>{errors.gemPrize.message}</p>}
      </div>
      <div>
        <label htmlFor="gemGrind">Gem Grind</label>
        <input
          type="number"
          name="gemGrind"
          id="gemGrind"
          placeholder="Please input gem grinded"
          ref={register({
            required: "Please input this field"
          })}
        />
        {errors.gemGrind && <p>{errors.gemGrind.message}</p>}
      </div>
      <div>
        <label htmlFor="Gem Net">Gem Net</label>
        {calculateGemNet}
      </div>
      <div>
        <label htmlFor="deck">Deck</label>
        <input
          type="text"
          name="deck"
          id=""
          ref={register({
            required: "Please input deck name"
          })}
        />
        {errors.deck && <p>{errors.deck.message}</p>}
      </div>
      <div>
        <label htmlFor="remark">Remark</label>
        <input type="text" name="remark" id="" ref={register()} />
      </div>
      <input type="submit" className="btn" />
    </form>
  );
}
