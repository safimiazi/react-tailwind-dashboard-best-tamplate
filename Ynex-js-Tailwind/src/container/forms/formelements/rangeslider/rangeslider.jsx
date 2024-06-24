import { Fragment } from 'react';
import { connect } from 'react-redux';
import Pageheader from '../../../../components/common/pageheader/pageheader';
import Showcode from '../../../../components/ui/showcode/showcode';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Box from '@mui/material/Box';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { styled } from '@mui/material/styles';
import LabeledTwoThumbs, { Marks } from './rangesliderdata';
import { range1, range2, range3, range4 } from '../../../../components/ui/data/formsdata';


const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

//  extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}
const Rangesliders = ({ local_varaiable }) => {
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Fragment>
      <Pageheader currentpage="Range Slider" activepage="Form Elements" mainpage="Range Slider" />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12">
          <Showcode title="Default Range" code={range1}>
            <input type="range" className="form-range" id="customRange1" />
          </Showcode>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <Showcode title="Disable Range" code={range2}>
            <input type="range" className="form-range" id="disabledRange" disabled />
          </Showcode>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <Showcode title=" Range With Min and Max Values " code={range3}>
            <input type="range" className="form-range" min="0" max="5" id="customRange2" />
          </Showcode>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <Showcode title="Range With Steps" code={range4}>
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3">noUiSlider:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Default-Styling
              </div>
            </div>
            <div className="box-body">
              <div id="slider">
   
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[10, 90]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Fit Handles
              </div>
            </div>
            <div className="box-body">
              <div id="slider-fit">
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[10, 90]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Rounded Styling
              </div>
            </div>
            <div className="box-body">
              <div id="slider-round" className="my-2">
                <RangeSlider
                  className="single-thumb"
                  defaultValue={[0, 50]}
                  thumbsDisabled={[true, false]}
                  rangeSlideDisabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Square Styling
              </div>
            </div>
            <div className="box-body">
              <div id="slider-square">
                <RangeSlider
                  className="square-thumb"
                  defaultValue={[0, 50]}
                  thumbsDisabled={[true, false]}
                  rangeSlideDisabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Toggle Movement By Clicking Pips</div>
            </div>
            <div className="box-body !pb-[3rem]">
              <div id="slider-pips">
                <LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'} />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Soft Limits</div>
            </div>
            <div className="box-body !pb-[3rem]">
              <div id="soft">
                <Marks rtl={local_varaiable.dir == 'rtl'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mb-3">noUiSlider Colors:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Primary
              </div>
            </div>
            <div className="box-body">
              <div id="primary-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Secondary
              </div>
            </div>
            <div className="box-body">
              <div id="secondary-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  color="secondary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Warning
              </div>
            </div>
            <div className="box-body">
              <div id="warning-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Info
              </div>
            </div>
            <div className="box-body">
              <div id="info-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Success
              </div>
            </div>
            <div className="box-body">
              <div id="success-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">
                Danger
              </div>
            </div>
            <div className="box-body">
              <div id="danger-colored-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {})(Rangesliders);
