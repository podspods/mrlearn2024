import { Meta, StoryObj } from '@storybook/react';
import DisplayCTA from './DisplayCTA';
import { irisationsSection, Section, SectionType } from '@irachus/jscommon';

const meta: Meta<typeof DisplayCTA> = {
  title: 'components/DisplayCTA', // Nom de la story
  component: DisplayCTA,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
};

export default meta;

const wksCTA : Section = {
  
  ...irisationsSection,
  ident : { ...irisationsSection.ident, type: SectionType.CTA}
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: wksCTA,
    idLang: 0
  }
};

