import { Context } from 'koa';
import { CountryType } from '@/types/CountryType';
import { Country } from '@/models/Country';

class CountryController {
  public static async create(ctx: Context):Promise<void> {
    const { name }: CountryType = ctx.request.body;

    const createdCountry = await Country.create({
      name,
    });

    ctx.status = 201;
    ctx.body = createdCountry;
  }

  public static async update(ctx: Context):Promise<void> {
    const { id } = ctx.params;
    const { name } = ctx.request.body;

    const updatedCountry = await Country.update(
      { name },
      {
        where: {
          id: Number(id),
        },
      },
    );

    ctx.body = updatedCountry;
  }

  public static async delete(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const deletedCountry = await Country.destroy({
      where: {
        id: Number(id),
      },
    });

    ctx.body = deletedCountry;
  }

  public static async getOne(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const countries = await Country.findOne({
      where: {
        id: Number(id),
      },
    });

    ctx.body = countries;
    ctx.status = countries ? 200 : 204;
  }

  public static async getAll(ctx: Context):Promise<void> {
    const countries = await Country.findAll();

    ctx.body = countries;
    ctx.status = countries.length > 0 ? 200 : 204;
  }
}

export default CountryController;
