class GiftView extends core.UIView {
	private gift:eui.Image;

	public constructor(){
		super("resource/skins/happybirthday.exml");
	}

	public open()
	{
		this.gift.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
			core.SoundManager.getInstance().playBgm("HappyBirthday_m4a",1);
		},this);

	}

	public destroy()
	{

	}
}
