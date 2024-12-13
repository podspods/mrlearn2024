import { Section, sectionInit } from '@irachus/jscommon';
import { connect } from './database/mongoConfig';
import sectionModel from './database/sectionModel';

export async function listSection(): Promise<Section[]> {
  try {
    await connect();
    console.log(' listSection connect 8==>', 8);

    const sectionList: Section[] = await sectionModel.find({});
    // .sort({ 'ident.sectionOrder': 1 });

    console.log('listSection sectionList 14==>', sectionList);
    return sectionList;
  } catch (error: any) {
    console.log('listSection error ==>', error);

    return [];
  }
}

// -------------------------------------------------------------------------------------------------
export async function listSectionByPage(id: string): Promise<Section[]> {
  try {
    await connect();

    const sectionList = await sectionModel
      // .find({ ident: { pageId: parseInt(params.id,10) } })
      .find({ 'ident.pageId': parseInt(id, 10) })
      .sort({ 'ident.sectionOrder': 1 });

    return sectionList;
  } catch (error: any) {
    return [];
  }
}
// -------------------------------------------------------------------------------------------------
export async function sectionId(id: string): Promise<Section> {
  try {
    await connect();

    const section = await sectionModel.findOne({ 'ident.id': id });
    return section;
  } catch (error: any) {
    return sectionInit;
  }
}
// -------------------------------------------------------------------------------------------------
export async function createSection(section: Section): Promise<Section> {
  try {
    await connect();

    const newSection = new sectionModel({
      ...section
    });

    const response = await newSection.save();
    return response;
  } catch (error: any) {
    console.error('create pageSection  POST ', error);
    return section;
  }
}
// -------------------------------------------------------------------------------------------------
export async function updateSection(section: Section): Promise<Section> {
  try {
    await connect();

    const response = await sectionModel.findOneAndUpdate(
      { 'ident.id': section.ident.id },
      { $set: section },
      { new: true }
    );
    return response;
  } catch (error: any) {
    console.error('updated section  PATCH ', error);
    return section;
  }
}
// // -------------------------------------------------------------------------------------------------
export async function deleteSection(id: string): Promise<number> {
  try {
    connect();
    const response = await sectionModel.deleteOne({ 'ident.id': id });

    return response.deletedCount;
  } catch (error: any) {
    return 0;
  }
}
