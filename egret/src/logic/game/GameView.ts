class GameView extends core.UIView {
	private flashBox:eui.Group;
	private notlike:eui.Group;
	private like:eui.Group;
	private title:eui.Label;

	public constructor(){
		super("resource/skins/mainSkin.exml");
	}

	public open()
	{
		this.like.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
			core.PageManage.getInstance().addViewControl(GiftViewControl, core.ViewLayerType.SceneLayer, core.RemoveViewType.RemoveBefore);
		},this);

		this.notlike.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
			this.flash();
		},this);
	}

	public destroy()
	{

	}

	private flash()
	{
		let w = this.flashBox.width - this.notlike.width;
		let h = this.flashBox.height - this.notlike.height;

		this.notlike.x = this.flashBox.x + Math.random()*w;
		this.notlike.y = this.flashBox.y + Math.random()*h;
	}
}
