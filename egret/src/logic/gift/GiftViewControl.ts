
class GiftViewControl extends core.ViewController {
	private View:GiftView;

	public constructor() {
		super();
	}

	public destroy() {
		if(this.View)
		{
			this.View.parent.removeChild(this.View);
			this.View.destroy();
			this.View = null;
		}
		super.destroy();
	}

	public open(): void {

		if(this.View == null){
			this.View = new GiftView();
		}
		this.getParent().addChild(this.View);
		this.View.open();

    }

	public update(): void {
	}

}
