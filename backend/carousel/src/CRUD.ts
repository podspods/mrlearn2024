import { Slide, slideInit } from '@irachus/jscommon';
import { connect } from './database/mongoConfig';
import slideModel from './database/carouselModel';

export async function listSlide(): Promise<Slide[]> {
  try {
    await connect();
    console.log(' listSlide connect 8==>', 8);

    const slideList: Slide[] = await slideModel
      .find({})
      .sort({ slideOrder: 1 });

    console.log('listSlide slideList 14==>', slideList);
    return slideList;
  } catch (error: any) {
    console.log('listSlide error ==>', error);

    return [];
  }
}

// -------------------------------------------------------------------------------------------------
export async function listSlideByPage(id: string): Promise<Slide[]> {
  try {
    console.log(' listSlideByPage==>', id);
    
    await connect();
    const slideList = await slideModel
      .find({ pageId: parseInt(id, 10) })
      .sort({ slideOrder: 1 });

    return slideList;
  } catch (error: any) {
    return [];
  }
}
// -------------------------------------------------------------------------------------------------
export async function slideId(id: string): Promise<Slide> {
  try {
    await connect();

    const slide = await slideModel.findOne({ id: id });
    return slide;
  } catch (error: any) {
    return slideInit;
  }
}
// -------------------------------------------------------------------------------------------------
export async function createSlide(slide: Slide): Promise<Slide> {
  try {
    await connect();

    const newSlide = new slideModel({
      ...slide
    });

    const response = await newSlide.save();
    return response;
  } catch (error: any) {
    console.error('create pageSlide  POST ', error);
    return slide;
  }
}
// -------------------------------------------------------------------------------------------------
export async function updateSlide(slide: Slide): Promise<Slide> {
  try {
    await connect();

    const response = await slideModel.findOneAndUpdate(
      { id: slide.id },
      { $set: slide },
      { new: true }
    );
    return response;
  } catch (error: any) {
    console.error('updated slide  PATCH ', error);
    return slide;
  }
}
// // -------------------------------------------------------------------------------------------------
export async function deleteSlide(id: string): Promise<number> {
  try {
    connect();
    const response = await slideModel.deleteOne({ id: id });

    return response.deletedCount;
  } catch (error: any) {
    return 0;
  }
}

// // -------------------------------------------------------------------------------------------------
export async function reorgSlide(pageId: string): Promise<number> {
  try {
    connect();
    const slideList = await slideModel
    .find({ pageId: parseInt(pageId, 10) })
    .sort({ slideOrder: 1 });

    let slideOrder = 0;
    slideList.map(async (slide) => {

      await slideModel.updateOne (
        { id: slide.id },
        {$set :{slideOrder : slideOrder +=10}}
      )
    });

    return slideOrder;
  } catch (error: any) {
    return 0;
  }
}
