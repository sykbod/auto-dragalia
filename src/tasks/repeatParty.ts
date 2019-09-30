import { img } from '@/assets/images';
import { tryCastSupportSkill, tryTransform2dragon } from '@/utils/battle';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';

export async function repeatParty(): Promise<void> {
  tryClickImage(img.teamReadyButton);
  tryClickImage(img.startBattleButton);
  tryClickImage(img.autoBattleSwitchOff);
  tryClickImage(img.retryButtonRed);
  tryClickImage(img.okButton);
  tryClickImage(img.closeButton);
  tryClickImage(img.cancelButton);
  tryClickImage(img.tapButton);
  tryClickImage(img.nextText);
  //if (tryClickImage(img.giveUpButtonWhite)) {
  //  await waitAndClickImage(img.giveUpButtonBlue, { timeout: 60e3 });
  //  throw new Error('队伍战力不足, 无法通关');
  //}
  // tslint:disable-next-line: no-floating-promises
  tryTransform2dragon();
  // tslint:disable-next-line: no-floating-promises
  // tryCastSupportSkill();
  await tryRepeatWithWings();
}

async function tryRepeatWithWings(): Promise<void> {
  try {
    await repeatWithWings();
  } catch {
    tryClickImage(img.continueButtonRed);
  }
}
async function repeatWithWings(): Promise<void> {
  clickImage(img.teamContinueButton);
  // await waitAndClickImage(img.teamContinueButton);
  // await waitAndClickImage(img.okButton);
}
